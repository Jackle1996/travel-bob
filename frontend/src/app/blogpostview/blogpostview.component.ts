import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../services/blogpost.service';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogposttransferService } from '../services/blogposttransfer.service';

@Component({
  selector: 'app-blogpostview',
  templateUrl: './blogpostview.component.html',
  styleUrls: ['./blogpostview.component.css']
})
export class BlogpostviewComponent implements OnInit {
  private blogposts: Blogpost[];
  private postId: number;
  private post: Blogpost;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService, private transfer: BlogposttransferService) {
    this.blogposts = [];
    this.route.paramMap.subscribe(params => {
       this.postId = Number(params.get('postid'));
       console.log('postid=', this.postId);
    });
    this.blogposts = this.transfer.getBlogposts();
    const val = this.blogposts.find(x => x.getId() === this.postId);
    this.post = val;
  }

  ngOnInit() {
  }
}
