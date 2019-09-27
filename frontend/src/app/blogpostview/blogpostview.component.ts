import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';

@Component({
  selector: 'app-blogpostview',
  templateUrl: './blogpostview.component.html',
  styleUrls: ['./blogpostview.component.css']
})
export class BlogpostviewComponent implements OnInit {
  private blogPost: Blogpost;
  private postId: number;

  constructor(private route: ActivatedRoute, public blogService: BlogService) {
    this.route.paramMap.subscribe(params => {
       this.postId = Number(params.get('postid'));
       console.log('postid=', this.postId);
    });

    // TODO: this.blogService.getBlogPost(this.postId, (post: Blogpost) => this.assignBlogposts(posts));
  }

  ngOnInit() {
  }

}
