import { Injectable } from '@angular/core';
import { Blog } from '../../../protos/blogposts_pb';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getAllBlogs(): Blog[] {
    const blogs: Blog[] = [];

    const blog1 = new Blog();
    blog1.setName('Yannick');
    blog1.setAuthor('Yannick the BlogWriter');
    blog1.setBlogimageurl('https://avatars0.githubusercontent.com/u/24352681?s=400&u=b2f9d5516ea3f39f934942e98d0ab1018f690480&v=4');
    blog1.setId(1);
    blogs.push(blog1);

    const blog2 = new Blog();
    blog2.setName('Marco');
    blog2.setAuthor('Marco the BlogWriter');
    blog2.setBlogimageurl('https://avatars2.githubusercontent.com/u/5302085?s=400&v=4');
    blog2.setId(2);
    blogs.push(blog2);

    return blogs;
  }
}
