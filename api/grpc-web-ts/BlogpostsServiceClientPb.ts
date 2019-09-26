/**
 * @fileoverview gRPC-Web generated client stub for travelbob.blogs
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  AllBlogsReply,
  AllBlogsRequest,
  BlogpostsReply,
  BlogpostsRequest,
  CreateBlogReply,
  CreateBlogRequest,
  CreateBlogpostReply,
  CreateBlogpostRequest,
  DeleteBlogReply,
  DeleteBlogRequest} from './blogposts_pb';

export class BlogsAPIClient {
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

  methodInfoGetAllBlogs = new grpcWeb.AbstractClientBase.MethodInfo(
    AllBlogsReply,
    (request: AllBlogsRequest) => {
      return request.serializeBinary();
    },
    AllBlogsReply.deserializeBinary
  );

  getAllBlogs(
    request: AllBlogsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AllBlogsReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.blogs.BlogsAPI/GetAllBlogs',
      request,
      metadata || {},
      this.methodInfoGetAllBlogs,
      callback);
  }

  methodInfoGetBlogposts = new grpcWeb.AbstractClientBase.MethodInfo(
    BlogpostsReply,
    (request: BlogpostsRequest) => {
      return request.serializeBinary();
    },
    BlogpostsReply.deserializeBinary
  );

  getBlogposts(
    request: BlogpostsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlogpostsReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.blogs.BlogsAPI/GetBlogposts',
      request,
      metadata || {},
      this.methodInfoGetBlogposts,
      callback);
  }

  methodInfoCreateBlog = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateBlogReply,
    (request: CreateBlogRequest) => {
      return request.serializeBinary();
    },
    CreateBlogReply.deserializeBinary
  );

  createBlog(
    request: CreateBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateBlogReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.blogs.BlogsAPI/CreateBlog',
      request,
      metadata || {},
      this.methodInfoCreateBlog,
      callback);
  }

  methodInfoCreateBlogpost = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateBlogpostReply,
    (request: CreateBlogpostRequest) => {
      return request.serializeBinary();
    },
    CreateBlogpostReply.deserializeBinary
  );

  createBlogpost(
    request: CreateBlogpostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateBlogpostReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.blogs.BlogsAPI/CreateBlogpost',
      request,
      metadata || {},
      this.methodInfoCreateBlogpost,
      callback);
  }

  methodInfoDeleteBlog = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteBlogReply,
    (request: DeleteBlogRequest) => {
      return request.serializeBinary();
    },
    DeleteBlogReply.deserializeBinary
  );

  deleteBlog(
    request: DeleteBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteBlogReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.blogs.BlogsAPI/DeleteBlog',
      request,
      metadata || {},
      this.methodInfoDeleteBlog,
      callback);
  }

}

