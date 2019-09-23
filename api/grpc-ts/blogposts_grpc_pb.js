// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var blogposts_pb = require('./blogposts_pb.js');

function serialize_travelbob_blogs_AllBlogsReply(arg) {
  if (!(arg instanceof blogposts_pb.AllBlogsReply)) {
    throw new Error('Expected argument of type travelbob.blogs.AllBlogsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_AllBlogsReply(buffer_arg) {
  return blogposts_pb.AllBlogsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_AllBlogsRequest(arg) {
  if (!(arg instanceof blogposts_pb.AllBlogsRequest)) {
    throw new Error('Expected argument of type travelbob.blogs.AllBlogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_AllBlogsRequest(buffer_arg) {
  return blogposts_pb.AllBlogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_BlogpostsReply(arg) {
  if (!(arg instanceof blogposts_pb.BlogpostsReply)) {
    throw new Error('Expected argument of type travelbob.blogs.BlogpostsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_BlogpostsReply(buffer_arg) {
  return blogposts_pb.BlogpostsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_BlogpostsRequest(arg) {
  if (!(arg instanceof blogposts_pb.BlogpostsRequest)) {
    throw new Error('Expected argument of type travelbob.blogs.BlogpostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_BlogpostsRequest(buffer_arg) {
  return blogposts_pb.BlogpostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlogsAPIService = exports.BlogsAPIService = {
  // Obtains all blogs.
  getAllBlogs: {
    path: '/travelbob.blogs.BlogsAPI/GetAllBlogs',
    requestStream: false,
    responseStream: false,
    requestType: blogposts_pb.AllBlogsRequest,
    responseType: blogposts_pb.AllBlogsReply,
    requestSerialize: serialize_travelbob_blogs_AllBlogsRequest,
    requestDeserialize: deserialize_travelbob_blogs_AllBlogsRequest,
    responseSerialize: serialize_travelbob_blogs_AllBlogsReply,
    responseDeserialize: deserialize_travelbob_blogs_AllBlogsReply,
  },
  // Obtains a blogpost by it's id.
  getBlogposts: {
    path: '/travelbob.blogs.BlogsAPI/GetBlogposts',
    requestStream: false,
    responseStream: false,
    requestType: blogposts_pb.BlogpostsRequest,
    responseType: blogposts_pb.BlogpostsReply,
    requestSerialize: serialize_travelbob_blogs_BlogpostsRequest,
    requestDeserialize: deserialize_travelbob_blogs_BlogpostsRequest,
    responseSerialize: serialize_travelbob_blogs_BlogpostsReply,
    responseDeserialize: deserialize_travelbob_blogs_BlogpostsReply,
  },
};

exports.BlogsAPIClient = grpc.makeGenericClientConstructor(BlogsAPIService);
