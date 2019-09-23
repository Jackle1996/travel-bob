import { Server, ServerUnaryCall, sendUnaryData, handleUnaryCall } from "grpc";

import { IBlogsAPIServer, BlogsAPIService } from "../../api/grpc-ts/blogposts_grpc_pb";
import { AllBlogsRequest, AllBlogsReply, BlogpostsRequest, BlogpostsReply, Blog, Blogpost, Timestamp } from "../../api/grpc-ts/blogposts_pb";

class BlogsAPI implements IBlogsAPIServer {

    /*
     * Returns a list of all blogs in the database.
     */
    public getAllBlogs(call: ServerUnaryCall<AllBlogsRequest>, callback: sendUnaryData<AllBlogsReply>): void {

        console.log('doGetAllBlogs');
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
    public getBlogposts(call: ServerUnaryCall<BlogpostsRequest>, callback: sendUnaryData<BlogpostsReply>): void {

    }
}

export {
    BlogsAPI,
    BlogsAPIService
}