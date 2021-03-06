import { Injectable } from '@angular/core';
import { Blog, AllBlogsRequest, AllBlogsReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { CreateBlogRequest, CreateBlogReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { UpdateBlogRequest, UpdateBlogReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { DeleteBlogRequest, DeleteBlogReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogsAPIClient } from '../../../../api/grpc-web-ts/BlogpostsServiceClientPb';
import { Error } from 'grpc-web';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService  {
  private grpcClient: BlogsAPIClient;

  constructor(private jwtService: JwtService) {
    this.grpcClient = new BlogsAPIClient('http://localhost:8080', null, null);
  }

  getBlogs(callback) {
    this.grpcClient.getAllBlogs(new AllBlogsRequest(), {}, (err: Error | null, response: AllBlogsReply) => {
      if (err) { console.log('getAllBlogs Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(data.getBlogsList()); });
  }

  createBlog(blog: Blog, callback) {
    const request = new CreateBlogRequest();
    request.setBlog(blog);
    this.grpcClient.createBlog(request, {authorization: this.jwtService.getJwtToken()}, (err: Error | null, response: CreateBlogReply) => {
      if (err) { console.log('CreateBlogRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }

  editBlog(blog: Blog, callback) {
    const request = new UpdateBlogRequest();
    request.setBlog(blog);
    this.grpcClient.updateBlog(request, {authorization: this.jwtService.getJwtToken()}, (err: Error | null, response: UpdateBlogReply) => {
      if (err) { console.log('UpdateBlogRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }

  deleteBlog(blogId: number, callback) {
    const request = new DeleteBlogRequest();
    request.setBlogid(blogId);
    this.grpcClient.deleteBlog(request, {authorization: this.jwtService.getJwtToken()}, (err: Error | null, response: DeleteBlogReply) => {
      if (err) { console.log('UpdateBlogRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }
}
