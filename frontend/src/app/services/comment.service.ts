import { Injectable } from '@angular/core';
import { Comment, GetCommentsRequest, GetCommentsReply } from '../../../../api/grpc-web-ts/comments_pb';
import { DeleteCommentReply, DeleteCommentRequest } from '../../../../api/grpc-web-ts/comments_pb';
import { AddCommentRequest, AddCommentReply } from '../../../../api/grpc-web-ts/comments_pb';
import { CommentsAPIClient } from '../../../../api/grpc-web-ts/CommentsServiceClientPb';
import { Error } from 'grpc-web';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private grpcClient: CommentsAPIClient;

  constructor(private jwtService: JwtService) {
    this.grpcClient = new CommentsAPIClient('http://localhost:8080', null, null);
   }

   getComments(postId: number, callback): void {
    const request = new GetCommentsRequest();
    request.setBlogpostId(postId);
    this.grpcClient.getComments(request, {}, (err: Error | null, response: GetCommentsReply) => {
      if (err) { console.log('GetCommentsRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(data.getCommentsList()); });
  }

  addComment(comment: Comment, callback) {
    const request = new AddCommentRequest();
    request.setComment(comment);
    this.grpcClient.addComment(request, {authorization: this.jwtService.getJwtToken()}, (err: Error | null, response: AddCommentReply) => {
      if (err) { console.log('AddCommentRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }

  deleteComment(commentId: number, callback) {
    const request = new DeleteCommentRequest();
    request.setCommentId(commentId);
    this.grpcClient.deleteComment(request, {authorization: this.jwtService.getJwtToken()}, (err: Error | null, response: DeleteCommentReply) => {
      if (err) { console.log('DeleteCommentRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }
}
