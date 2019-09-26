import { ServerUnaryCall, sendUnaryData } from "grpc";

import { DatabaseAccess } from "./DatabaseAccess";
import { IDbBlog } from "./models/Blog";
import { IDbBlogpost } from "./models/Blogpost";

import { IBlogsAPIServer, BlogsAPIService } from "../../api/grpc-ts/blogposts_grpc_pb";
import {
    AllBlogsRequest, AllBlogsReply,
    BlogpostsRequest, BlogpostsReply,
    CreateBlogRequest, CreateBlogReply,
    CreateBlogpostRequest, CreateBlogpostReply,
    Blog, Blogpost,
    Timestamp
} from "../../api/grpc-ts/blogposts_pb";

class BlogsAPI implements IBlogsAPIServer {

    /*
     * Initializes a new instance of the BlogsAPI.
     */
    constructor(private databaseAccess: DatabaseAccess) { }

    /*
     * Returns a list of all blogs in the database.
     */
    public async getAllBlogs(call: ServerUnaryCall<AllBlogsRequest>, callback: sendUnaryData<AllBlogsReply>): Promise<void> {

        console.log('[GrpcServer] BlogsAPI.doGetAllBlogs()');

        let blogsFromDb: IDbBlog[] = await this.databaseAccess.GetAllBlogs();
        console.log(`[GrpcServer] Found ${blogsFromDb.length} blogs in database.`);

        let blogsForResponse: Blog[] = new Array<Blog>();
        blogsFromDb.forEach(blogFromDb => {

            let blog: Blog = new Blog();

            blog.setId(blogFromDb.id);
            blog.setBlogimageurl(blogFromDb.blogImageUrl);
            blog.setDescription(blogFromDb.description);
            blog.setAuthor(blogFromDb.author);
            blog.setTitle(blogFromDb.title);
            blog.setDestination(blogFromDb.destination);
            let startDate: Timestamp = new Timestamp();
            startDate.setSeconds(blogFromDb.startUnixTimestamp);
            blog.setStartdate(startDate);
            let endDate: Timestamp = new Timestamp();
            endDate.setSeconds(blogFromDb.endUnixTimestamp);
            blog.setStartdate(endDate);

            blogsForResponse.push(blog);
        });

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
        console.log(`[GrpcServer] Found ${postsFromDb.length} posts for blog ${blogId} in database.`);

        let postsForResponse: Blogpost[] = new Array<Blogpost>();
        postsFromDb.forEach(postFromDb => {

            let post: Blogpost = new Blogpost();

            post.setBlogid(postFromDb.blogId);
            post.setHeaderimageurl(postFromDb.headerImageUrl);
            post.setId(postFromDb.id);
            post.setLocation(postFromDb.location);
            post.setText(postFromDb.text);
            post.setTitle(postFromDb.title);
            let travelDate = new Timestamp();
            travelDate.setSeconds(postFromDb.travelDateUnixTimestamp);
            post.setTraveldate(travelDate);

            postsForResponse.push(post);
        });
        let reply: BlogpostsReply = new BlogpostsReply();
        reply.setBlogpostsList(postsForResponse);

        callback(null, reply);
    }

    /**
     * Create a new Blog.
     */
    public async createBlog(call: ServerUnaryCall<CreateBlogRequest>, callback: sendUnaryData<CreateBlogReply>) {

        console.log('[GrpcServer] BlogsAPI.createBlog()');

        this.databaseAccess.CreateNewBlog(call.request.getBlog());

        callback(null, new CreateBlogReply());
    }

    /**
     * Create a new Blogpost.
     */
    public createBlogpost(call: ServerUnaryCall<CreateBlogpostRequest>, callback: sendUnaryData<CreateBlogpostReply>) {

        console.log('[GrpcServer] BlogsAPI.createBlogpost()');

        callback(new Error('[GrpcServer] Not implemented yet.'), new CreateBlogpostReply());
    }
}

export {
    BlogsAPI,
    BlogsAPIService
}