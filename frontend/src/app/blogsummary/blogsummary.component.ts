import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../../../../api/grpc-web-ts/blogposts_pb';

@Component({
  selector: 'app-blogsummary',
  templateUrl: './blogsummary.component.html',
  styleUrls: ['./blogsummary.component.css']
})
export class BlogsummaryComponent implements OnInit {
  private blogs: Blog[];

  constructor(public blogService: BlogService) {
    this.blogService.getBlogs((posts: Blog[]) => this.assignBlogs(posts));
  }

  ngOnInit() {
  }

  getAllBlogs(): Blog[] {
    return this.blogs;
  }

  private assignBlogs(blogs: Blog[]) {
    console.log('blogs= ', blogs);
    this.blogs = blogs;
  }
}
