// package: travelbob.comments
// file: comments.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as comments_pb from "./comments_pb";

interface ICommentsAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addComment: ICommentsAPIService_IAddComment;
    getComments: ICommentsAPIService_IGetComments;
    deleteComment: ICommentsAPIService_IDeleteComment;
}

interface ICommentsAPIService_IAddComment extends grpc.MethodDefinition<comments_pb.AddCommentRequest, comments_pb.AddCommentReply> {
    path: string; // "/travelbob.comments.CommentsAPI/AddComment"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<comments_pb.AddCommentRequest>;
    requestDeserialize: grpc.deserialize<comments_pb.AddCommentRequest>;
    responseSerialize: grpc.serialize<comments_pb.AddCommentReply>;
    responseDeserialize: grpc.deserialize<comments_pb.AddCommentReply>;
}
interface ICommentsAPIService_IGetComments extends grpc.MethodDefinition<comments_pb.GetCommentsRequest, comments_pb.GetCommentsReply> {
    path: string; // "/travelbob.comments.CommentsAPI/GetComments"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<comments_pb.GetCommentsRequest>;
    requestDeserialize: grpc.deserialize<comments_pb.GetCommentsRequest>;
    responseSerialize: grpc.serialize<comments_pb.GetCommentsReply>;
    responseDeserialize: grpc.deserialize<comments_pb.GetCommentsReply>;
}
interface ICommentsAPIService_IDeleteComment extends grpc.MethodDefinition<comments_pb.DeleteCommentRequest, comments_pb.DeleteCommentReply> {
    path: string; // "/travelbob.comments.CommentsAPI/DeleteComment"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<comments_pb.DeleteCommentRequest>;
    requestDeserialize: grpc.deserialize<comments_pb.DeleteCommentRequest>;
    responseSerialize: grpc.serialize<comments_pb.DeleteCommentReply>;
    responseDeserialize: grpc.deserialize<comments_pb.DeleteCommentReply>;
}

export const CommentsAPIService: ICommentsAPIService;

export interface ICommentsAPIServer {
    addComment: grpc.handleUnaryCall<comments_pb.AddCommentRequest, comments_pb.AddCommentReply>;
    getComments: grpc.handleUnaryCall<comments_pb.GetCommentsRequest, comments_pb.GetCommentsReply>;
    deleteComment: grpc.handleUnaryCall<comments_pb.DeleteCommentRequest, comments_pb.DeleteCommentReply>;
}

export interface ICommentsAPIClient {
    addComment(request: comments_pb.AddCommentRequest, callback: (error: grpc.ServiceError | null, response: comments_pb.AddCommentReply) => void): grpc.ClientUnaryCall;
    addComment(request: comments_pb.AddCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_pb.AddCommentReply) => void): grpc.ClientUnaryCall;
    addComment(request: comments_pb.AddCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_pb.AddCommentReply) => void): grpc.ClientUnaryCall;
    getComments(request: comments_pb.GetCommentsRequest, callback: (error: grpc.ServiceError | null, response: comments_pb.GetCommentsReply) => void): grpc.ClientUnaryCall;
    getComments(request: comments_pb.GetCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_pb.GetCommentsReply) => void): grpc.ClientUnaryCall;
    getComments(request: comments_pb.GetCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_pb.GetCommentsReply) => void): grpc.ClientUnaryCall;
    deleteComment(request: comments_pb.DeleteCommentRequest, callback: (error: grpc.ServiceError | null, response: comments_pb.DeleteCommentReply) => void): grpc.ClientUnaryCall;
    deleteComment(request: comments_pb.DeleteCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_pb.DeleteCommentReply) => void): grpc.ClientUnaryCall;
    deleteComment(request: comments_pb.DeleteCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_pb.DeleteCommentReply) => void): grpc.ClientUnaryCall;
}

export class CommentsAPIClient extends grpc.Client implements ICommentsAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addComment(request: comments_pb.AddCommentRequest, callback: (error: grpc.ServiceError | null, response: comments_pb.AddCommentReply) => void): grpc.ClientUnaryCall;
    public addComment(request: comments_pb.AddCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_pb.AddCommentReply) => void): grpc.ClientUnaryCall;
    public addComment(request: comments_pb.AddCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_pb.AddCommentReply) => void): grpc.ClientUnaryCall;
    public getComments(request: comments_pb.GetCommentsRequest, callback: (error: grpc.ServiceError | null, response: comments_pb.GetCommentsReply) => void): grpc.ClientUnaryCall;
    public getComments(request: comments_pb.GetCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_pb.GetCommentsReply) => void): grpc.ClientUnaryCall;
    public getComments(request: comments_pb.GetCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_pb.GetCommentsReply) => void): grpc.ClientUnaryCall;
    public deleteComment(request: comments_pb.DeleteCommentRequest, callback: (error: grpc.ServiceError | null, response: comments_pb.DeleteCommentReply) => void): grpc.ClientUnaryCall;
    public deleteComment(request: comments_pb.DeleteCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_pb.DeleteCommentReply) => void): grpc.ClientUnaryCall;
    public deleteComment(request: comments_pb.DeleteCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_pb.DeleteCommentReply) => void): grpc.ClientUnaryCall;
}
