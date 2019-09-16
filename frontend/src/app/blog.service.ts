import { Injectable } from '@angular/core';
import { Blog, TravelDate, Timestamp } from '../../../protos/blogposts_pb';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getAllBlogs(): Blog[] {
    const blogs: Blog[] = [];


    const startDate: Timestamp = new Timestamp();
    const endDate: Timestamp = new Timestamp();

    startDate.setSeconds(1567347502);
    endDate.setSeconds(1568643502);


    const blog1 = new Blog();
    blog1.setAuthor('Yannick');
    blog1.setDescription('This is Yannicks super duper blog.');
    blog1.setBlogimageurl('https://avatars0.githubusercontent.com/u/24352681?s=400&u=b2f9d5516ea3f39f934942e98d0ab1018f690480&v=4');
    blog1.setId(1);
    blog1.setDestination('Spain');
    blog1.setStartdate(startDate);
    blog1.setEnddate(endDate);
    blogs.push(blog1);

    const blog2 = new Blog();
    blog2.setAuthor('Marco');
    blog2.setDescription('Marco wrote this Blog while totally sober. Nice content ahead!');
    blog2.setBlogimageurl('https://avatars2.githubusercontent.com/u/5302085?s=400&v=4');
    blog2.setId(2);
    blog2.setDestination('Uganda');
    blog2.setStartdate(startDate);
    blog2.setEnddate(endDate);
    blogs.push(blog2);
    return blogs;
  }
}
