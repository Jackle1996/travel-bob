import { Injectable } from '@angular/core';
import { Blog, Timestamp, AllBlogsRequest, AllBlogsReply, BlogpostsRequest, BlogpostsReply } from '../../../api/grpc-web-ts/blogposts_pb';
import { BlogsAPIClient } from '../../../api/grpc-web-ts/BlogpostsServiceClientPb';
import { Error } from 'grpc-web';

@Injectable({
  providedIn: 'root'
})
export class BlogService  {
  blogs: Blog[];

  constructor() {
    const grpcClient: BlogsAPIClient = new BlogsAPIClient('http://localhost:8080', null, null);
    grpcClient.getAllBlogs(new AllBlogsRequest(), {}, (err: Error | null, response: AllBlogsReply) => {
      if (err) { console.log('Error!!!: ', err); }
      this.blogs = response.getBlogsList();
      console.log(this.blogs);
    });
  }

  getAllBlogs(): Blog[] {
    return this.blogs;
  }
}
