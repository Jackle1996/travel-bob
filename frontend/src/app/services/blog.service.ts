import { Injectable } from '@angular/core';
import { Blog, AllBlogsRequest, AllBlogsReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { CreateBlogRequest, CreateBlogReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { UpdateBlogRequest, UpdateBlogReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { DeleteBlogRequest, DeleteBlogReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogpostsRequest, BlogpostsReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogsAPIClient } from '../../../../api/grpc-web-ts/BlogpostsServiceClientPb';
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
      console.log('response', response);
    }).on('data', data => { callback(data.getBlogsList()); });
  }

  getBlogPosts(blogId: number, callback): void {
    const request = new BlogpostsRequest();
    request.setBlogid(blogId);

    this.grpcClient.getBlogposts(request, {}, (err: Error | null, response: BlogpostsReply) => {
      if (err) { console.log('getBlogposts Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(data.getBlogpostsList()); });
  }

  createBlog(blog: Blog, callback) {
    const request = new CreateBlogRequest();
    request.setBlog(blog);
    this.grpcClient.createBlog(request, {}, (err: Error | null, response: CreateBlogReply) => {
      if (err) { console.log('CreateBlogRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }

  editBlog(blog: Blog, callback) {
    const request = new UpdateBlogRequest();
    request.setBlog(blog);
    this.grpcClient.updateBlog(request, {}, (err: Error | null, response: UpdateBlogReply) => {
      if (err) { console.log('UpdateBlogRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }

  deleteBlog(blogId: number, callback) {
    const request = new DeleteBlogRequest();
    request.setBlogid(blogId);
    this.grpcClient.deleteBlog(request, {}, (err: Error | null, response: DeleteBlogReply) => {
      if (err) { console.log('UpdateBlogRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }
}
