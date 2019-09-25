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

        let fakeBlog: Blog = new Blog();
        fakeBlog.setId(1);
        fakeBlog.setBlogimageurl('https://test.ch/1.jpg');
        fakeBlog.setTitle('This is a fake blog!');
        fakeBlog.setDescription('This blog is veri gud, you can trust me.')
        fakeBlog.setAuthor('me');
        fakeBlog.setDestination('HOME');
        let startDate: Timestamp = new Timestamp();
        startDate.setSeconds(1234567);
        fakeBlog.setStartdate(startDate);
        let endDate: Timestamp = new Timestamp();
        endDate.setSeconds(1234568);
        fakeBlog.setEnddate(endDate);

        let reply: AllBlogsReply = new AllBlogsReply();
        let blogList: Blog[] = [fakeBlog];
        reply.setBlogsList(blogList);

        callback(null, reply);
    }

    /*
     * Returns a list of all blogposts in the database that belong to the provided blog.
     */
    public async getBlogposts(call: ServerUnaryCall<BlogpostsRequest>, callback: sendUnaryData<BlogpostsReply>): Promise<void> {

        console.log('[GrpcServer] BlogsAPI.getBlogposts()');

        let blogId = call.request.getBlogid();
        let postsFromDb: IDbBlogpost[] = await this.databaseAccess.GetAllBlogposts(blogId);
        console.log(`[GrpcServer] Found ${postsFromDb.length} posts for blog ${blogId}.`);

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