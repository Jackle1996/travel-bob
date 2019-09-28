/**
 * @fileoverview gRPC-Web generated client stub for travelbob.users
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  CreateNewUserReply,
  CreateNewUserRequest,
  LogInReply,
  LogInRequest} from './users_pb';

export class UsersAPIClient {
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

  methodInfoCreateNewUser = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateNewUserReply,
    (request: CreateNewUserRequest) => {
      return request.serializeBinary();
    },
    CreateNewUserReply.deserializeBinary
  );

  createNewUser(
    request: CreateNewUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateNewUserReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.users.UsersAPI/CreateNewUser',
      request,
      metadata || {},
      this.methodInfoCreateNewUser,
      callback);
  }

  methodInfoLogIn = new grpcWeb.AbstractClientBase.MethodInfo(
    LogInReply,
    (request: LogInRequest) => {
      return request.serializeBinary();
    },
    LogInReply.deserializeBinary
  );

  logIn(
    request: LogInRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogInReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/travelbob.users.UsersAPI/LogIn',
      request,
      metadata || {},
      this.methodInfoLogIn,
      callback);
  }

}

