/**
 * @fileoverview gRPC-Web generated client stub for travelbob.comments
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  AddCommentReply,
  AddCommentRequest,
  DeleteCommentReply,
  DeleteCommentRequest,
  GetCommentsReply,
  GetCommentsRequest} from './comments_pb';

export class CommentsAPIClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAddComment = new grpcWeb.AbstractClientBase.MethodInfo(
    AddCommentReply,
    (request: AddCommentRequest) => {
      return request.serializeBinary();
    },
    AddCommentReply.deserializeBinary
  );

  addComment(
    request: AddCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddCommentReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.comments.CommentsAPI/AddComment',
      request,
      metadata || {},
      this.methodInfoAddComment,
      callback);
  }

  methodInfoGetComments = new grpcWeb.AbstractClientBase.MethodInfo(
    GetCommentsReply,
    (request: GetCommentsRequest) => {
      return request.serializeBinary();
    },
    GetCommentsReply.deserializeBinary
  );

  getComments(
    request: GetCommentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetCommentsReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.comments.CommentsAPI/GetComments',
      request,
      metadata || {},
      this.methodInfoGetComments,
      callback);
  }

  methodInfoDeleteComment = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteCommentReply,
    (request: DeleteCommentRequest) => {
      return request.serializeBinary();
    },
    DeleteCommentReply.deserializeBinary
  );

  deleteComment(
    request: DeleteCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteCommentReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.comments.CommentsAPI/DeleteComment',
      request,
      metadata || {},
      this.methodInfoDeleteComment,
      callback);
  }

}

