import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';
import { BlogposttransferService } from '../services/blogposttransfer.service';
import { Comment } from '../../../../api/grpc-web-ts/comments_pb';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-blogpostview',
  templateUrl: './blogpostview.component.html',
  styleUrls: ['./blogpostview.component.css']
})
export class BlogpostviewComponent implements OnInit {
  @ViewChild('newcomment', null) newcomment: ElementRef;

  private blogposts: Blogpost[];
  private postId: number;
  private post: Blogpost;
  private comments: Comment[];

  constructor(private route: ActivatedRoute, private commentService: CommentService, private transfer: BlogposttransferService) {
    this.blogposts = [];
    this.route.paramMap.subscribe(params => {
      this.postId = Number(params.get('postid'));
      console.log('postid=', this.postId);
    });
    this.blogposts = this.transfer.getBlogposts();
    const val = this.blogposts.find(x => x.getId() === this.postId);
    this.post = val;
    this.updateComments();
  }

  ngOnInit() {
  }

  updateComments() {
    this.commentService.getComments(this.postId, (comments: Comment[]) => this.assignComments(comments));
  }

  getBlogPost() {
    return this.post;
  }

  getAllComments(): Comment[] {
    return this.comments;
  }

  private assignComments(comments: Comment[]) {
    this.comments = comments;
  }

  addComment() {
    const addComment = new Comment();
    addComment.setId(-1);
    addComment.setText(this.newcomment.nativeElement.value);
    addComment.setAuthor(this.getUsernameFromJWT());
    addComment.setBlogpostId(this.postId);
    addComment.setUnixTimestamp(Math.floor(Date.now() / 1000));
    this.commentService.addComment(addComment, () => this.updateComments());
  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId, () => this.updateComments());
  }

  getUsernameFromJWT(): string {
    const token = localStorage.getItem('jwt').split('.');
    const json = JSON.parse(atob(token[1]));
    return json.name;
  }
}
