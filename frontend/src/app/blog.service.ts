import { Injectable } from '@angular/core';
import { Blog, AllBlogsRequest, AllBlogsReply } from '../../../api/grpc-web-ts/blogposts_pb';
import { Blogpost, Timestamp, BlogpostsRequest, BlogpostsReply } from '../../../api/grpc-web-ts/blogposts_pb';
import { BlogsAPIClient } from '../../../api/grpc-web-ts/BlogpostsServiceClientPb';
import { Error } from 'grpc-web';

@Injectable({
  providedIn: 'root'
})
export class BlogService  {
  private grpcClient: BlogsAPIClient;
  private blogs: Blog[];
  private blogposts: Blogpost[];

  constructor() {
    this.grpcClient = new BlogsAPIClient('http://localhost:8080', null, null);

    this.grpcClient.getAllBlogs(new AllBlogsRequest(), {}, (err: Error | null, response: AllBlogsReply) => {
      if (err) { console.log('getAllBlogs Error:: ', err); }
      this.blogs = response.getBlogsList();
      console.log('blogs=', this.blogs);
    });
  }

  getAllBlogs(): Blog[] {
    return this.blogs;
  }

  getAllBlogposts(): Blogpost[] {
    return this.blogposts;
  }

  getBlogPosts(blogId: number, callback): void {
    const request = new BlogpostsRequest();
    request.setBlogid(blogId);

    this.grpcClient.getBlogposts(request, {}, (err: Error | null, response: BlogpostsReply) => {
      if (err) { console.log('getBlogposts Error:: ', err); }
      this.blogposts = response.getBlogpostsList();
    }).on('data', data => { callback(data.getBlogpostsList()); });
  }
}
