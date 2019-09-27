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

  constructor() {
    this.grpcClient = new BlogsAPIClient('http://localhost:8080', null, null);
  }

  getBlogs(callback) {
    this.grpcClient.getAllBlogs(new AllBlogsRequest(), {}, (err: Error | null, response: AllBlogsReply) => {
      if (err) { console.log('getAllBlogs Error:: ', err); }
    }).on('data', data => { callback(data.getBlogsList()); });
  }

  getBlogPosts(blogId: number, callback): void {
    const request = new BlogpostsRequest();
    request.setBlogid(blogId);

    this.grpcClient.getBlogposts(request, {}, (err: Error | null, response: BlogpostsReply) => {
      if (err) { console.log('getBlogposts Error:: ', err); }
    }).on('data', data => { callback(data.getBlogpostsList()); });
  }
}
