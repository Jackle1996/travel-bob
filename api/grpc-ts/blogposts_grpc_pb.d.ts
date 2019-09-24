// package: travelbob.blogs
// file: blogposts.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as blogposts_pb from "./blogposts_pb";

interface IBlogsAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllBlogs: IBlogsAPIService_IGetAllBlogs;
    getBlogposts: IBlogsAPIService_IGetBlogposts;
    createBlog: IBlogsAPIService_ICreateBlog;
    createBlogpost: IBlogsAPIService_ICreateBlogpost;
}

interface IBlogsAPIService_IGetAllBlogs extends grpc.MethodDefinition<blogposts_pb.AllBlogsRequest, blogposts_pb.AllBlogsReply> {
    path: string; // "/travelbob.blogs.BlogsAPI/GetAllBlogs"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<blogposts_pb.AllBlogsRequest>;
    requestDeserialize: grpc.deserialize<blogposts_pb.AllBlogsRequest>;
    responseSerialize: grpc.serialize<blogposts_pb.AllBlogsReply>;
    responseDeserialize: grpc.deserialize<blogposts_pb.AllBlogsReply>;
}
interface IBlogsAPIService_IGetBlogposts extends grpc.MethodDefinition<blogposts_pb.BlogpostsRequest, blogposts_pb.BlogpostsReply> {
    path: string; // "/travelbob.blogs.BlogsAPI/GetBlogposts"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<blogposts_pb.BlogpostsRequest>;
    requestDeserialize: grpc.deserialize<blogposts_pb.BlogpostsRequest>;
    responseSerialize: grpc.serialize<blogposts_pb.BlogpostsReply>;
    responseDeserialize: grpc.deserialize<blogposts_pb.BlogpostsReply>;
}
interface IBlogsAPIService_ICreateBlog extends grpc.MethodDefinition<blogposts_pb.CreateBlogRequest, blogposts_pb.CreateBlogReply> {
    path: string; // "/travelbob.blogs.BlogsAPI/CreateBlog"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<blogposts_pb.CreateBlogRequest>;
    requestDeserialize: grpc.deserialize<blogposts_pb.CreateBlogRequest>;
    responseSerialize: grpc.serialize<blogposts_pb.CreateBlogReply>;
    responseDeserialize: grpc.deserialize<blogposts_pb.CreateBlogReply>;
}
interface IBlogsAPIService_ICreateBlogpost extends grpc.MethodDefinition<blogposts_pb.CreateBlogpostRequest, blogposts_pb.CreateBlogpostReply> {
    path: string; // "/travelbob.blogs.BlogsAPI/CreateBlogpost"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<blogposts_pb.CreateBlogpostRequest>;
    requestDeserialize: grpc.deserialize<blogposts_pb.CreateBlogpostRequest>;
    responseSerialize: grpc.serialize<blogposts_pb.CreateBlogpostReply>;
    responseDeserialize: grpc.deserialize<blogposts_pb.CreateBlogpostReply>;
}

export const BlogsAPIService: IBlogsAPIService;

export interface IBlogsAPIServer {
    getAllBlogs: grpc.handleUnaryCall<blogposts_pb.AllBlogsRequest, blogposts_pb.AllBlogsReply>;
    getBlogposts: grpc.handleUnaryCall<blogposts_pb.BlogpostsRequest, blogposts_pb.BlogpostsReply>;
    createBlog: grpc.handleUnaryCall<blogposts_pb.CreateBlogRequest, blogposts_pb.CreateBlogReply>;
    createBlogpost: grpc.handleUnaryCall<blogposts_pb.CreateBlogpostRequest, blogposts_pb.CreateBlogpostReply>;
}

export interface IBlogsAPIClient {
    getAllBlogs(request: blogposts_pb.AllBlogsRequest, callback: (error: grpc.ServiceError | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
    getAllBlogs(request: blogposts_pb.AllBlogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
    getAllBlogs(request: blogposts_pb.AllBlogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
    getBlogposts(request: blogposts_pb.BlogpostsRequest, callback: (error: grpc.ServiceError | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
    getBlogposts(request: blogposts_pb.BlogpostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
    getBlogposts(request: blogposts_pb.BlogpostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
    createBlog(request: blogposts_pb.CreateBlogRequest, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogReply) => void): grpc.ClientUnaryCall;
    createBlog(request: blogposts_pb.CreateBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogReply) => void): grpc.ClientUnaryCall;
    createBlog(request: blogposts_pb.CreateBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogReply) => void): grpc.ClientUnaryCall;
    createBlogpost(request: blogposts_pb.CreateBlogpostRequest, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogpostReply) => void): grpc.ClientUnaryCall;
    createBlogpost(request: blogposts_pb.CreateBlogpostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogpostReply) => void): grpc.ClientUnaryCall;
    createBlogpost(request: blogposts_pb.CreateBlogpostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogpostReply) => void): grpc.ClientUnaryCall;
}

export class BlogsAPIClient extends grpc.Client implements IBlogsAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAllBlogs(request: blogposts_pb.AllBlogsRequest, callback: (error: grpc.ServiceError | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
    public getAllBlogs(request: blogposts_pb.AllBlogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
    public getAllBlogs(request: blogposts_pb.AllBlogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blogposts_pb.AllBlogsReply) => void): grpc.ClientUnaryCall;
    public getBlogposts(request: blogposts_pb.BlogpostsRequest, callback: (error: grpc.ServiceError | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
    public getBlogposts(request: blogposts_pb.BlogpostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
    public getBlogposts(request: blogposts_pb.BlogpostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blogposts_pb.BlogpostsReply) => void): grpc.ClientUnaryCall;
    public createBlog(request: blogposts_pb.CreateBlogRequest, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogReply) => void): grpc.ClientUnaryCall;
    public createBlog(request: blogposts_pb.CreateBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogReply) => void): grpc.ClientUnaryCall;
    public createBlog(request: blogposts_pb.CreateBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogReply) => void): grpc.ClientUnaryCall;
    public createBlogpost(request: blogposts_pb.CreateBlogpostRequest, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogpostReply) => void): grpc.ClientUnaryCall;
    public createBlogpost(request: blogposts_pb.CreateBlogpostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogpostReply) => void): grpc.ClientUnaryCall;
    public createBlogpost(request: blogposts_pb.CreateBlogpostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blogposts_pb.CreateBlogpostReply) => void): grpc.ClientUnaryCall;
}
