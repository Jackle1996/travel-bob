import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogpost } from '../../../../api/grpc-web-ts/blogposts_pb';
import { Comment } from '../../../../api/grpc-web-ts/comments_pb';
import { CommentService } from '../services/comment.service';
import { JwtService } from '../services/jwt.service';
import { BlogpostService } from '../services/blogpost.service';

@Component({
  selector: 'app-blogpostview',
  templateUrl: './blogpostview.component.html',
  styleUrls: ['./blogpostview.component.css']
})
export class BlogpostviewComponent implements OnInit {
  @ViewChild('newcomment', null) newcomment: ElementRef;

  private blogposts: Blogpost[];
  private postId: number;
  private blogId: number;
  private post: Blogpost;
  private comments: Comment[];

  constructor(private route: ActivatedRoute, private commentService: CommentService, 
              private jwtService: JwtService, private blogpostService: BlogpostService) {
    this.blogposts = [];
    this.route.paramMap.subscribe(params => {
      this.postId = Number(params.get('postid'));
      this.blogId = Number(params.get('blogid'));
      console.log('postid=', this.postId);
    });
    this.blogpostService.getBlogPosts(this.blogId, (posts) => this.assignBlogposts(posts));
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

  private assignBlogposts(blogposts: Blogpost[]) {
    this.blogposts = blogposts;
    this.post = this.blogposts.find(x => x.getId() === this.postId);
    this.updateComments();
  }

  addComment() {
    const addComment = new Comment();
    addComment.setId(-1);
    addComment.setText(this.newcomment.nativeElement.value);
    addComment.setAuthor(this.getUsernameFrom());
    addComment.setBlogpostId(this.postId);
    addComment.setUnixTimestamp(Math.floor(Date.now() / 1000));
    this.commentService.addComment(addComment, () => this.updateComments());
  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId, () => this.updateComments());
  }

  getUsernameFrom(): string {
    return this.jwtService.getUsernameFromJWT();
  }

  checkIfLoggedIn() {
    return this.jwtService.isUserLoggedIn();
  }

  checkIfYourComment(comment: Comment) {
    if (this.jwtService.isUserLoggedIn()) {
      return this.jwtService.getUsernameFromJWT() === comment.getAuthor();
    } else {
      return false;
    }
  }
}
