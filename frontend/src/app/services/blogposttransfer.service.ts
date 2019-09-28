import { Injectable } from '@angular/core';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';

@Injectable({
  providedIn: 'root'
})
export class BlogposttransferService {
  private blogposts: Blogpost[];

  constructor() { }

  setBlogposts(blogposts: Blogpost[]) {
    this.blogposts = blogposts;
  }

  getBlogposts() {
    return this.blogposts;
  }
}
