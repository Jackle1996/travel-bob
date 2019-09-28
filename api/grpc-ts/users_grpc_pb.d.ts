// package: travelbob.users
// file: users.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUsersAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createNewUser: IUsersAPIService_ICreateNewUser;
    logIn: IUsersAPIService_ILogIn;
    verifyToken: IUsersAPIService_IVerifyToken;
}

interface IUsersAPIService_ICreateNewUser extends grpc.MethodDefinition<users_pb.CreateNewUserRequest, users_pb.CreateNewUserReply> {
    path: string; // "/travelbob.users.UsersAPI/CreateNewUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.CreateNewUserRequest>;
    requestDeserialize: grpc.deserialize<users_pb.CreateNewUserRequest>;
    responseSerialize: grpc.serialize<users_pb.CreateNewUserReply>;
    responseDeserialize: grpc.deserialize<users_pb.CreateNewUserReply>;
}
interface IUsersAPIService_ILogIn extends grpc.MethodDefinition<users_pb.LogInRequest, users_pb.LogInReply> {
    path: string; // "/travelbob.users.UsersAPI/LogIn"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.LogInRequest>;
    requestDeserialize: grpc.deserialize<users_pb.LogInRequest>;
    responseSerialize: grpc.serialize<users_pb.LogInReply>;
    responseDeserialize: grpc.deserialize<users_pb.LogInReply>;
}
interface IUsersAPIService_IVerifyToken extends grpc.MethodDefinition<users_pb.VerifyTokenRequest, users_pb.VerifyTokenReply> {
    path: string; // "/travelbob.users.UsersAPI/VerifyToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.VerifyTokenRequest>;
    requestDeserialize: grpc.deserialize<users_pb.VerifyTokenRequest>;
    responseSerialize: grpc.serialize<users_pb.VerifyTokenReply>;
    responseDeserialize: grpc.deserialize<users_pb.VerifyTokenReply>;
}

export const UsersAPIService: IUsersAPIService;

export interface IUsersAPIServer {
    createNewUser: grpc.handleUnaryCall<users_pb.CreateNewUserRequest, users_pb.CreateNewUserReply>;
    logIn: grpc.handleUnaryCall<users_pb.LogInRequest, users_pb.LogInReply>;
    verifyToken: grpc.handleUnaryCall<users_pb.VerifyTokenRequest, users_pb.VerifyTokenReply>;
}

export interface IUsersAPIClient {
    createNewUser(request: users_pb.CreateNewUserRequest, callback: (error: grpc.ServiceError | null, response: users_pb.CreateNewUserReply) => void): grpc.ClientUnaryCall;
    createNewUser(request: users_pb.CreateNewUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.CreateNewUserReply) => void): grpc.ClientUnaryCall;
    createNewUser(request: users_pb.CreateNewUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.CreateNewUserReply) => void): grpc.ClientUnaryCall;
    logIn(request: users_pb.LogInRequest, callback: (error: grpc.ServiceError | null, response: users_pb.LogInReply) => void): grpc.ClientUnaryCall;
    logIn(request: users_pb.LogInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.LogInReply) => void): grpc.ClientUnaryCall;
    logIn(request: users_pb.LogInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.LogInReply) => void): grpc.ClientUnaryCall;
    verifyToken(request: users_pb.VerifyTokenRequest, callback: (error: grpc.ServiceError | null, response: users_pb.VerifyTokenReply) => void): grpc.ClientUnaryCall;
    verifyToken(request: users_pb.VerifyTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.VerifyTokenReply) => void): grpc.ClientUnaryCall;
    verifyToken(request: users_pb.VerifyTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.VerifyTokenReply) => void): grpc.ClientUnaryCall;
}

export class UsersAPIClient extends grpc.Client implements IUsersAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createNewUser(request: users_pb.CreateNewUserRequest, callback: (error: grpc.ServiceError | null, response: users_pb.CreateNewUserReply) => void): grpc.ClientUnaryCall;
    public createNewUser(request: users_pb.CreateNewUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.CreateNewUserReply) => void): grpc.ClientUnaryCall;
    public createNewUser(request: users_pb.CreateNewUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.CreateNewUserReply) => void): grpc.ClientUnaryCall;
    public logIn(request: users_pb.LogInRequest, callback: (error: grpc.ServiceError | null, response: users_pb.LogInReply) => void): grpc.ClientUnaryCall;
    public logIn(request: users_pb.LogInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.LogInReply) => void): grpc.ClientUnaryCall;
    public logIn(request: users_pb.LogInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.LogInReply) => void): grpc.ClientUnaryCall;
    public verifyToken(request: users_pb.VerifyTokenRequest, callback: (error: grpc.ServiceError | null, response: users_pb.VerifyTokenReply) => void): grpc.ClientUnaryCall;
    public verifyToken(request: users_pb.VerifyTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.VerifyTokenReply) => void): grpc.ClientUnaryCall;
    public verifyToken(request: users_pb.VerifyTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.VerifyTokenReply) => void): grpc.ClientUnaryCall;
}
