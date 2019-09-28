// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var comments_pb = require('./comments_pb.js');

function serialize_travelbob_comments_AddCommentReply(arg) {
  if (!(arg instanceof comments_pb.AddCommentReply)) {
    throw new Error('Expected argument of type travelbob.comments.AddCommentReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_comments_AddCommentReply(buffer_arg) {
  return comments_pb.AddCommentReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_comments_AddCommentRequest(arg) {
  if (!(arg instanceof comments_pb.AddCommentRequest)) {
    throw new Error('Expected argument of type travelbob.comments.AddCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_comments_AddCommentRequest(buffer_arg) {
  return comments_pb.AddCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_comments_DeleteCommentReply(arg) {
  if (!(arg instanceof comments_pb.DeleteCommentReply)) {
    throw new Error('Expected argument of type travelbob.comments.DeleteCommentReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_comments_DeleteCommentReply(buffer_arg) {
  return comments_pb.DeleteCommentReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_comments_DeleteCommentRequest(arg) {
  if (!(arg instanceof comments_pb.DeleteCommentRequest)) {
    throw new Error('Expected argument of type travelbob.comments.DeleteCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_comments_DeleteCommentRequest(buffer_arg) {
  return comments_pb.DeleteCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_comments_GetCommentsReply(arg) {
  if (!(arg instanceof comments_pb.GetCommentsReply)) {
    throw new Error('Expected argument of type travelbob.comments.GetCommentsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_comments_GetCommentsReply(buffer_arg) {
  return comments_pb.GetCommentsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_comments_GetCommentsRequest(arg) {
  if (!(arg instanceof comments_pb.GetCommentsRequest)) {
    throw new Error('Expected argument of type travelbob.comments.GetCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_comments_GetCommentsRequest(buffer_arg) {
  return comments_pb.GetCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommentsAPIService = exports.CommentsAPIService = {
  // Add a new comment to a blogpost.
  addComment: {
    path: '/travelbob.comments.CommentsAPI/AddComment',
    requestStream: false,
    responseStream: false,
    requestType: comments_pb.AddCommentRequest,
    responseType: comments_pb.AddCommentReply,
    requestSerialize: serialize_travelbob_comments_AddCommentRequest,
    requestDeserialize: deserialize_travelbob_comments_AddCommentRequest,
    responseSerialize: serialize_travelbob_comments_AddCommentReply,
    responseDeserialize: deserialize_travelbob_comments_AddCommentReply,
  },
  // Get all comments for a blogpost.
  getComments: {
    path: '/travelbob.comments.CommentsAPI/GetComments',
    requestStream: false,
    responseStream: false,
    requestType: comments_pb.GetCommentsRequest,
    responseType: comments_pb.GetCommentsReply,
    requestSerialize: serialize_travelbob_comments_GetCommentsRequest,
    requestDeserialize: deserialize_travelbob_comments_GetCommentsRequest,
    responseSerialize: serialize_travelbob_comments_GetCommentsReply,
    responseDeserialize: deserialize_travelbob_comments_GetCommentsReply,
  },
  // Delete a comment.
  deleteComment: {
    path: '/travelbob.comments.CommentsAPI/DeleteComment',
    requestStream: false,
    responseStream: false,
    requestType: comments_pb.DeleteCommentRequest,
    responseType: comments_pb.DeleteCommentReply,
    requestSerialize: serialize_travelbob_comments_DeleteCommentRequest,
    requestDeserialize: deserialize_travelbob_comments_DeleteCommentRequest,
    responseSerialize: serialize_travelbob_comments_DeleteCommentReply,
    responseDeserialize: deserialize_travelbob_comments_DeleteCommentReply,
  },
};

exports.CommentsAPIClient = grpc.makeGenericClientConstructor(CommentsAPIService);
