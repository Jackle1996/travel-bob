// package: travelbob.blogs
// file: blogposts.proto

import * as grpc from 'grpc';
import * as blogposts_pb from './blogposts_pb';

interface IBlogsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllBlogs: IBlogsService_IGetAllBlogs;
  getBlogposts: IBlogsService_IGetBlogposts;
}

interface IBlogsService_IGetAllBlogs {
  path: string; // "/travelbob.blogs.Blogs/GetAllBlogs"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<blogposts_pb.AllBlogsRequest>;
  requestDeserialize: grpc.deserialize<blogposts_pb.AllBlogsRequest>;
  responseSerialize: grpc.serialize<blogposts_pb.AllBlogsReply>;
  responseDeserialize: grpc.deserialize<blogposts_pb.AllBlogsReply>;
}

interface IBlogsService_IGetBlogposts {
  path: string; // "/travelbob.blogs.Blogs/GetBlogposts"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<blogposts_pb.BlogpostsRequest>;
  requestDeserialize: grpc.deserialize<blogposts_pb.BlogpostsRequest>;
  responseSerialize: grpc.serialize<blogposts_pb.BlogpostsReply>;
  responseDeserialize: grpc.deserialize<blogposts_pb.BlogpostsReply>;
}

export const BlogsService: IBlogsService;
export interface IBlogsServer {
  getAllBlogs: grpc.handleUnaryCall<blogposts_pb.AllBlogsRequest, blogposts_pb.AllBlogsReply>;
  getBlogposts: grpc.handleUnaryCall<blogposts_pb.BlogpostsRequest, blogposts_pb.BlogpostsReply>;
}

export interface IBlogsClient {
  getAllBlogs(request: blogposts_pb.AllBlogsRequest, callback: (error: Error | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
  getAllBlogs(request: blogposts_pb.AllBlogsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
  getBlogposts(request: blogposts_pb.BlogpostsRequest, callback: (error: Error | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
  getBlogposts(request: blogposts_pb.BlogpostsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
}

export class BlogsClient extends grpc.Client implements IBlogsClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public getAllBlogs(request: blogposts_pb.AllBlogsRequest, callback: (error: Error | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
  public getAllBlogs(request: blogposts_pb.AllBlogsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
  public getBlogposts(request: blogposts_pb.BlogpostsRequest, callback: (error: Error | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
  public getBlogposts(request: blogposts_pb.BlogpostsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
}

