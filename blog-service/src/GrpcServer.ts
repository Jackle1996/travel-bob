import { DatabaseAccess } from "./DatabaseAccess";
import { IDbBlog } from "./models/Blog";
import { IDbBlogpost, DbBlogpost } from "./models/Blogpost";

import { DbGrpcMapper } from "./DbToGrpcMapper";
import { AuthChecker } from "./helpers/AuthChecker";
import { CommentDeleter } from "./helpers/CommentDeleter";

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

    private readonly authorizationMetadataName: string = 'authorization';

    /*
     * Initializes a new instance of the BlogsAPI.
     */
    constructor(
        private databaseAccess: DatabaseAccess,
        private dbToGrpcMapper: DbGrpcMapper,
        private authChecker: AuthChecker,
        private commentDeleter: CommentDeleter) { }

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

        const reply: CreateBlogReply = new CreateBlogReply();

        const checkResponse: boolean | Error = await this.authChecker.CheckMetadataForJWT(call.metadata).catch();
        if (checkResponse instanceof Error) {
            callback(checkResponse, reply);
            return;
        }
        if (!this.authChecker.IsUserBlogger(call.metadata.get(this.authorizationMetadataName)[0].toString())) {
            console.log(`[GrpcServer] User is not allowed to manipulate blogs and blogposts.`);
            callback(new Error(`UNAUTHORIZED! User is not a blogger.`), reply);
            return;
        }

        const dbBlog: IDbBlog = this.dbToGrpcMapper.Convert(call.request.getBlog());
        const blogId: number = await this.databaseAccess.CreateNewBlog(dbBlog);

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

        const reply: CreateBlogpostReply = new CreateBlogpostReply();

        const checkResponse: boolean | Error = await this.authChecker.CheckMetadataForJWT(call.metadata).catch();
        if (checkResponse instanceof Error) {
            callback(checkResponse, reply);
            return;
        }
        if (!this.authChecker.IsUserBlogger(call.metadata.get(this.authorizationMetadataName)[0].toString())) {
            console.log(`[GrpcServer] User is not allowed to manipulate blogs and blogposts.`);
            callback(new Error(`UNAUTHORIZED! User is not a blogger.`), reply);
            return;
        }

        const dbBlogpost: IDbBlogpost = this.dbToGrpcMapper.Convert(call.request.getBlogpost());
        const postId: number = await this.databaseAccess.CreateNewBlogpost(dbBlogpost);

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

        const reply: DeleteBlogReply = new DeleteBlogReply();

        const checkResponse: boolean | Error = await this.authChecker.CheckMetadataForJWT(call.metadata).catch();
        if (checkResponse instanceof Error) {
            callback(checkResponse, reply);
            return;
        }
        if (!this.authChecker.IsUserBlogger(call.metadata.get(this.authorizationMetadataName)[0].toString())) {
            console.log(`[GrpcServer] User is not allowed to manipulate blogs and blogposts.`);
            callback(new Error(`UNAUTHORIZED! User is not a blogger.`), reply);
            return;
        }

        const blogId: number = call.request.getBlogid();
        const posts: IDbBlogpost[] = await DbBlogpost.find({ blogId: blogId}).exec().catch();
        for (let i = 0; i < posts.length; i++) {
            this.commentDeleter.DeleteCommentsOfBlogpost(posts[i].id, call.metadata);
        }
        const ok: boolean = await this.databaseAccess.DeleteBlog(blogId);
        const err: Error = ok ? null : new Error(`Could not delete blog with id ${blogId}.`);

        callback(err, reply);
    }

    /**
     * Delete a blogpost.
     */
    public async deleteBlogpost(call: ServerUnaryCall<DeleteBlogpostRequest>, callback: sendUnaryData<DeleteBlogpostReply>) {

        console.log('[GrpcServer] BlogsAPI.deleteBlogpost()');

        const reply: DeleteBlogpostReply = new DeleteBlogpostReply();

        const checkResponse: boolean | Error = await this.authChecker.CheckMetadataForJWT(call.metadata).catch();
        if (checkResponse instanceof Error) {
            callback(checkResponse, reply);
            return;
        }
        if (!this.authChecker.IsUserBlogger(call.metadata.get(this.authorizationMetadataName)[0].toString())) {
            console.log(`[GrpcServer] User is not allowed to manipulate blogs and blogposts.`);
            callback(new Error(`UNAUTHORIZED! User is not a blogger.`), reply);
            return;
        }

        const blogpostId: number = call.request.getBlogpostid();
        this.commentDeleter.DeleteCommentsOfBlogpost(blogpostId, call.metadata);
        const ok: boolean = await this.databaseAccess.DeleteBlogpost(blogpostId);
        const err: Error = ok ? null : new Error(`Could not delete blogpost with id ${blogpostId}.`);

        callback(err, reply);
    }

    public async updateBlog(call: ServerUnaryCall<UpdateBlogRequest>, callback: sendUnaryData<UpdateBlogReply>) {

        console.log('[GrpcServer] BlogsAPI.updateBlog()');

        const reply: UpdateBlogReply = new UpdateBlogReply();

        const checkResponse: boolean | Error = await this.authChecker.CheckMetadataForJWT(call.metadata).catch();
        if (checkResponse instanceof Error) {
            callback(checkResponse, reply);
            return;
        }
        if (!this.authChecker.IsUserBlogger(call.metadata.get(this.authorizationMetadataName)[0].toString())) {
            console.log(`[GrpcServer] User is not allowed to manipulate blogs and blogposts.`);
            callback(new Error(`UNAUTHORIZED! User is not a blogger.`), reply);
            return;
        }

        const blog: Blog = call.request.getBlog();
        const dbBlog = this.dbToGrpcMapper.Convert(blog);
        const ok: boolean = await this.databaseAccess.UpdateBlog(dbBlog);
        const err: Error = ok ? null : new Error(`Could not update blog with id ${dbBlog.id}.`);

        callback(err, reply);
    }

    public async updateBlogpost(call: ServerUnaryCall<UpdateBlogpostRequest>, callback: sendUnaryData<UpdateBlogpostReply>) {

        console.log('[GrpcServer] BlogsAPI.updateBlogpost()');

        const reply: UpdateBlogpostReply = new UpdateBlogpostReply();

        const checkResponse: boolean | Error = await this.authChecker.CheckMetadataForJWT(call.metadata).catch();
        if (checkResponse instanceof Error) {
            callback(checkResponse, reply);
            return;
        }
        if (!this.authChecker.IsUserBlogger(call.metadata.get(this.authorizationMetadataName)[0].toString())) {
            console.log(`[GrpcServer] User is not allowed to manipulate blogs and blogposts.`);
            callback(new Error(`UNAUTHORIZED! User is not a blogger.`), reply);
            return;
        }

        const blogpost: Blogpost = call.request.getBlogpost();
        const dbBlogpost = this.dbToGrpcMapper.Convert(blogpost);
        const ok: boolean = await this.databaseAccess.UpdateBlogpost(dbBlogpost);
        const err: Error = ok ? null : new Error(`Could not update blogpost with id ${dbBlogpost.id}.`);

        callback(err, reply);
    }


}

export {
    BlogsAPI,
    BlogsAPIService
}