import { Injectable } from '@angular/core';
import { BlogpostsRequest, BlogpostsReply, Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';
import { CreateBlogpostRequest, CreateBlogpostReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { UpdateBlogpostRequest, UpdateBlogpostReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { DeleteBlogpostRequest, DeleteBlogpostReply } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogsAPIClient } from '../../../../api/grpc-web-ts/BlogpostsServiceClientPb';
import { Error } from 'grpc-web';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  private grpcClient: BlogsAPIClient;

  constructor() {
    this.grpcClient = new BlogsAPIClient('http://localhost:8080', null, null);
  }

  getBlogPosts(blogId: number, callback): void {
    const request = new BlogpostsRequest();
    request.setBlogid(blogId);
    this.grpcClient.getBlogposts(request, {}, (err: Error | null, response: BlogpostsReply) => {
      if (err) { console.log('getBlogposts Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(data.getBlogpostsList()); });
  }

  createBlogPost(blogpost: Blogpost, callback) {
    const request = new CreateBlogpostRequest();
    request.setBlogpost(blogpost);
    this.grpcClient.createBlogpost(request, {}, (err: Error | null, response: CreateBlogpostReply) => {
      if (err) { console.log('CreateBlogpostRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }

  editBlogPost(blogpost: Blogpost, callback) {
    const request = new UpdateBlogpostRequest();
    request.setBlogpost(blogpost);
    this.grpcClient.updateBlogpost(request, {}, (err: Error | null, response: UpdateBlogpostReply) => {
      if (err) { console.log('UpdateBlogpostRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }

  deleteBlogPost(blogpostId: number, callback) {
    const request = new DeleteBlogpostRequest();
    request.setBlogpostid(blogpostId);
    this.grpcClient.deleteBlogpost(request, {}, (err: Error | null, response: DeleteBlogpostReply) => {
      if (err) { console.log('DeleteBlogpostRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }
}
