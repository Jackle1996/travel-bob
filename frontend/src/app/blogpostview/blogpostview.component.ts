import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../services/blogpost.service';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';

@Component({
  selector: 'app-blogpostview',
  templateUrl: './blogpostview.component.html',
  styleUrls: ['./blogpostview.component.css']
})
export class BlogpostviewComponent implements OnInit {
  private blogPost: Blogpost;
  private postId: number;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService) {
    this.route.paramMap.subscribe(params => {
       this.postId = Number(params.get('postid'));
       console.log('postid=', this.postId);
    });

    // TODO: this.blogpostService.getBlogPost(this.postId, (post: Blogpost) => this.assignBlogposts(posts));
  }

  ngOnInit() {
  }

}
