import { DatabaseAccess } from "./DatabaseAccess";
import { IDbBlog } from "./models/Blog";
import { IDbBlogpost } from "./models/Blogpost";

import { DbGrpcMapper } from "./DbToGrpcMapper";

import { ServerUnaryCall, sendUnaryData } from "grpc";
import { IBlogsAPIServer, BlogsAPIService } from "../../api/grpc-ts/blogposts_grpc_pb";
import {
    AllBlogsRequest, AllBlogsReply,
    BlogpostsRequest, BlogpostsReply,
    CreateBlogRequest, CreateBlogReply,
    CreateBlogpostRequest, CreateBlogpostReply,
    DeleteBlogRequest, DeleteBlogReply,
    DeleteBlogpostRequest, DeleteBlogpostReply,
    UpdateBlogRequest, UpdateBlogReply,
    UpdateBlogpostRequest, UpdateBlogpostReply,
    Blog, Blogpost
} from "../../api/grpc-ts/blogposts_pb";
import { isNull } from "util";

class BlogsAPI implements IBlogsAPIServer {

    /*
     * Initializes a new instance of the BlogsAPI.
     */
    constructor(
        private databaseAccess: DatabaseAccess,
        private dbToGrpcMapper: DbGrpcMapper) { }

    /*
     * Returns a list of all blogs in the database.
     */
    public async getAllBlogs(call: ServerUnaryCall<AllBlogsRequest>, callback: sendUnaryData<AllBlogsReply>): Promise<void> {

        console.log('[GrpcServer] BlogsAPI.doGetAllBlogs()');

        let blogsFromDb: IDbBlog[] = await this.databaseAccess.GetAllBlogs();
        console.log(`[GrpcServer] Got ${blogsFromDb.length} blogs from database.`);

        let blogsForResponse: Blog[] = this.dbToGrpcMapper.Convert(blogsFromDb);

        let reply: AllBlogsReply = new AllBlogsReply();
        reply.setBlogsList(blogsForResponse);

        callback(null, reply);
    }

    /*
     * Returns a list of all blogposts in the database that belong to the provided blog.
     */
    public async getBlogposts(call: ServerUnaryCall<BlogpostsRequest>, callback: sendUnaryData<BlogpostsReply>): Promise<void> {

        console.log('[GrpcServer] BlogsAPI.getBlogposts()');

        let blogId = call.request.getBlogid();
        let postsFromDb: IDbBlogpost[] = await this.databaseAccess.GetAllBlogposts(blogId);
        console.log(`[GrpcServer] Got ${postsFromDb.length} posts for blog ${blogId} from database.`);

        let postsForResponse: Blogpost[] = this.dbToGrpcMapper.Convert(postsFromDb);

        let reply: BlogpostsReply = new BlogpostsReply();
        reply.setBlogpostsList(postsForResponse);

        callback(null, reply);
    }

    /**
     * Create a new Blog.
     */
    public async createBlog(call: ServerUnaryCall<CreateBlogRequest>, callback: sendUnaryData<CreateBlogReply>) {

        console.log('[GrpcServer] BlogsAPI.createBlog()');

        const dbBlog: IDbBlog = this.dbToGrpcMapper.Convert(call.request.getBlog());
        const blogId: number = await this.databaseAccess.CreateNewBlog(dbBlog);

        const reply: CreateBlogReply = new CreateBlogReply();
        reply.setBlogid(blogId);
        const err = isNull(blogId)
            ? new Error('Error: Could not create blog. Probably some data missing in the request.')
            : null;
        callback(err, reply);
    }

    /**
     * Create a new Blogpost.
     */
    public async createBlogpost(call: ServerUnaryCall<CreateBlogpostRequest>, callback: sendUnaryData<CreateBlogpostReply>) {

        console.log('[GrpcServer] BlogsAPI.createBlogpost()');

        const dbBlogpost: IDbBlogpost = this.dbToGrpcMapper.Convert(call.request.getBlogpost());
        const postId: number = await this.databaseAccess.CreateNewBlogpost(dbBlogpost);

        const reply: CreateBlogpostReply = new CreateBlogpostReply();
        reply.setBlogpostid(postId);
        const err = isNull(postId)
            ? new Error('Error: Could not create blogpost. Probably some data missing in the request or invalid blog id.')
            : null;
        callback(err, reply);
    }

    /**
     * Delete a blog and all its blogposts.
     */
    public async deleteBlog(call: ServerUnaryCall<DeleteBlogRequest>, callback: sendUnaryData<DeleteBlogReply>): Promise<void> {

        console.log('[GrpcServer] BlogsAPI.deleteBlog()');

        const blogId: number = call.request.getBlogid()
        const ok: boolean = await this.databaseAccess.DeleteBlog(blogId);
        const err: Error = ok ? null : new Error(`Could not delete blog with id ${blogId}.`);

        callback(err, new DeleteBlogReply());
    }

    /**
     * Delete a blogpost.
     */
    public async deleteBlogpost(call: ServerUnaryCall<DeleteBlogpostRequest>, callback: sendUnaryData<DeleteBlogpostReply>) {

        console.log('[GrpcServer] BlogsAPI.deleteBlogpost()');

        const blogpostId: number = call.request.getBlogpostid()
        const ok: boolean = await this.databaseAccess.DeleteBlogpost(blogpostId);
        const err: Error = ok ? null : new Error(`Could not delete blogpost with id ${blogpostId}.`);

        callback(err, new DeleteBlogpostReply());
    }

    public async updateBlog(call: ServerUnaryCall<UpdateBlogRequest>, callback: sendUnaryData<UpdateBlogReply>) {

        console.log('[GrpcServer] BlogsAPI.updateBlog()');

        const blog: Blog = call.request.getBlog();
        const dbBlog = this.dbToGrpcMapper.Convert(blog);
        const ok: boolean = await this.databaseAccess.UpdateBlog(dbBlog);
        const err: Error = ok ? null : new Error(`Could not update blog with id ${dbBlog.id}.`);

        callback(err, new UpdateBlogReply());
    }

    public async updateBlogpost(call: ServerUnaryCall<UpdateBlogpostRequest>, callback: sendUnaryData<UpdateBlogpostReply>) {

        console.log('[GrpcServer] BlogsAPI.updateBlogpost()');

        const blogpost: Blogpost = call.request.getBlogpost();
        const dbBlogpost = this.dbToGrpcMapper.Convert(blogpost);
        const ok: boolean = await this.databaseAccess.UpdateBlogpost(dbBlogpost);
        const err: Error = ok ? null : new Error(`Could not update blogpost with id ${dbBlogpost.id}.`);

        callback(err, new UpdateBlogpostReply());
    }


}

export {
    BlogsAPI,
    BlogsAPIService
}