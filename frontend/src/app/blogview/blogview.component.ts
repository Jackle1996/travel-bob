import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})

export class BlogviewComponent implements OnInit {
  private blogId: number;
  private blogPosts: Blogpost[];

  constructor(private route: ActivatedRoute, public blogService: BlogService) {
    this.blogPosts = [];
    this.route.paramMap.subscribe(params => {
       this.blogId = Number(params.get('id'));
       console.log('blogId=', this.blogId)
    });
    this.blogService.getBlogPosts(this.blogId, (posts: Blogpost[]) => this.assignBlogposts(posts));
  }

  ngOnInit() {
  }

  getAllBlogposts(): Blogpost[] {
    return this.blogPosts;
  }

  private assignBlogposts(posts: Blogpost[]) {
    console.log('blogposts= ', posts);
    this.blogPosts = posts;
  }
}
