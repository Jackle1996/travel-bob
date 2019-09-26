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

function serialize_travelbob_blogs_CreateBlogReply(arg) {
  if (!(arg instanceof blogposts_pb.CreateBlogReply)) {
    throw new Error('Expected argument of type travelbob.blogs.CreateBlogReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_CreateBlogReply(buffer_arg) {
  return blogposts_pb.CreateBlogReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_CreateBlogRequest(arg) {
  if (!(arg instanceof blogposts_pb.CreateBlogRequest)) {
    throw new Error('Expected argument of type travelbob.blogs.CreateBlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_CreateBlogRequest(buffer_arg) {
  return blogposts_pb.CreateBlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_CreateBlogpostReply(arg) {
  if (!(arg instanceof blogposts_pb.CreateBlogpostReply)) {
    throw new Error('Expected argument of type travelbob.blogs.CreateBlogpostReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_CreateBlogpostReply(buffer_arg) {
  return blogposts_pb.CreateBlogpostReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_CreateBlogpostRequest(arg) {
  if (!(arg instanceof blogposts_pb.CreateBlogpostRequest)) {
    throw new Error('Expected argument of type travelbob.blogs.CreateBlogpostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_CreateBlogpostRequest(buffer_arg) {
  return blogposts_pb.CreateBlogpostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_DeleteBlogReply(arg) {
  if (!(arg instanceof blogposts_pb.DeleteBlogReply)) {
    throw new Error('Expected argument of type travelbob.blogs.DeleteBlogReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_DeleteBlogReply(buffer_arg) {
  return blogposts_pb.DeleteBlogReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_DeleteBlogRequest(arg) {
  if (!(arg instanceof blogposts_pb.DeleteBlogRequest)) {
    throw new Error('Expected argument of type travelbob.blogs.DeleteBlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_DeleteBlogRequest(buffer_arg) {
  return blogposts_pb.DeleteBlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_DeleteBlogpostReply(arg) {
  if (!(arg instanceof blogposts_pb.DeleteBlogpostReply)) {
    throw new Error('Expected argument of type travelbob.blogs.DeleteBlogpostReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_DeleteBlogpostReply(buffer_arg) {
  return blogposts_pb.DeleteBlogpostReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_blogs_DeleteBlogpostRequest(arg) {
  if (!(arg instanceof blogposts_pb.DeleteBlogpostRequest)) {
    throw new Error('Expected argument of type travelbob.blogs.DeleteBlogpostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_blogs_DeleteBlogpostRequest(buffer_arg) {
  return blogposts_pb.DeleteBlogpostRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Create a new blog
  createBlog: {
    path: '/travelbob.blogs.BlogsAPI/CreateBlog',
    requestStream: false,
    responseStream: false,
    requestType: blogposts_pb.CreateBlogRequest,
    responseType: blogposts_pb.CreateBlogReply,
    requestSerialize: serialize_travelbob_blogs_CreateBlogRequest,
    requestDeserialize: deserialize_travelbob_blogs_CreateBlogRequest,
    responseSerialize: serialize_travelbob_blogs_CreateBlogReply,
    responseDeserialize: deserialize_travelbob_blogs_CreateBlogReply,
  },
  // Create a new blogpost
  createBlogpost: {
    path: '/travelbob.blogs.BlogsAPI/CreateBlogpost',
    requestStream: false,
    responseStream: false,
    requestType: blogposts_pb.CreateBlogpostRequest,
    responseType: blogposts_pb.CreateBlogpostReply,
    requestSerialize: serialize_travelbob_blogs_CreateBlogpostRequest,
    requestDeserialize: deserialize_travelbob_blogs_CreateBlogpostRequest,
    responseSerialize: serialize_travelbob_blogs_CreateBlogpostReply,
    responseDeserialize: deserialize_travelbob_blogs_CreateBlogpostReply,
  },
  // Delete a blog and its blogposts
  deleteBlog: {
    path: '/travelbob.blogs.BlogsAPI/DeleteBlog',
    requestStream: false,
    responseStream: false,
    requestType: blogposts_pb.DeleteBlogRequest,
    responseType: blogposts_pb.DeleteBlogReply,
    requestSerialize: serialize_travelbob_blogs_DeleteBlogRequest,
    requestDeserialize: deserialize_travelbob_blogs_DeleteBlogRequest,
    responseSerialize: serialize_travelbob_blogs_DeleteBlogReply,
    responseDeserialize: deserialize_travelbob_blogs_DeleteBlogReply,
  },
  // Delete a blogpost
  deleteBlogpost: {
    path: '/travelbob.blogs.BlogsAPI/DeleteBlogpost',
    requestStream: false,
    responseStream: false,
    requestType: blogposts_pb.DeleteBlogpostRequest,
    responseType: blogposts_pb.DeleteBlogpostReply,
    requestSerialize: serialize_travelbob_blogs_DeleteBlogpostRequest,
    requestDeserialize: deserialize_travelbob_blogs_DeleteBlogpostRequest,
    responseSerialize: serialize_travelbob_blogs_DeleteBlogpostReply,
    responseDeserialize: deserialize_travelbob_blogs_DeleteBlogpostReply,
  },
};

exports.BlogsAPIClient = grpc.makeGenericClientConstructor(BlogsAPIService);
