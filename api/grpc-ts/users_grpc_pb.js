// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_travelbob_users_CreateNewUserReply(arg) {
  if (!(arg instanceof users_pb.CreateNewUserReply)) {
    throw new Error('Expected argument of type travelbob.users.CreateNewUserReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_users_CreateNewUserReply(buffer_arg) {
  return users_pb.CreateNewUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_users_CreateNewUserRequest(arg) {
  if (!(arg instanceof users_pb.CreateNewUserRequest)) {
    throw new Error('Expected argument of type travelbob.users.CreateNewUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_users_CreateNewUserRequest(buffer_arg) {
  return users_pb.CreateNewUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_users_LogInReply(arg) {
  if (!(arg instanceof users_pb.LogInReply)) {
    throw new Error('Expected argument of type travelbob.users.LogInReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_users_LogInReply(buffer_arg) {
  return users_pb.LogInReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_users_LogInRequest(arg) {
  if (!(arg instanceof users_pb.LogInRequest)) {
    throw new Error('Expected argument of type travelbob.users.LogInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_users_LogInRequest(buffer_arg) {
  return users_pb.LogInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_users_VerifyTokenReply(arg) {
  if (!(arg instanceof users_pb.VerifyTokenReply)) {
    throw new Error('Expected argument of type travelbob.users.VerifyTokenReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_users_VerifyTokenReply(buffer_arg) {
  return users_pb.VerifyTokenReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelbob_users_VerifyTokenRequest(arg) {
  if (!(arg instanceof users_pb.VerifyTokenRequest)) {
    throw new Error('Expected argument of type travelbob.users.VerifyTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_travelbob_users_VerifyTokenRequest(buffer_arg) {
  return users_pb.VerifyTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersAPIService = exports.UsersAPIService = {
  // Create a new user.
  createNewUser: {
    path: '/travelbob.users.UsersAPI/CreateNewUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.CreateNewUserRequest,
    responseType: users_pb.CreateNewUserReply,
    requestSerialize: serialize_travelbob_users_CreateNewUserRequest,
    requestDeserialize: deserialize_travelbob_users_CreateNewUserRequest,
    responseSerialize: serialize_travelbob_users_CreateNewUserReply,
    responseDeserialize: deserialize_travelbob_users_CreateNewUserReply,
  },
  // Log in.
  logIn: {
    path: '/travelbob.users.UsersAPI/LogIn',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.LogInRequest,
    responseType: users_pb.LogInReply,
    requestSerialize: serialize_travelbob_users_LogInRequest,
    requestDeserialize: deserialize_travelbob_users_LogInRequest,
    responseSerialize: serialize_travelbob_users_LogInReply,
    responseDeserialize: deserialize_travelbob_users_LogInReply,
  },
  // Verify that the JWT in the metadata of the call is valid.
  verifyToken: {
    path: '/travelbob.users.UsersAPI/VerifyToken',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.VerifyTokenRequest,
    responseType: users_pb.VerifyTokenReply,
    requestSerialize: serialize_travelbob_users_VerifyTokenRequest,
    requestDeserialize: deserialize_travelbob_users_VerifyTokenRequest,
    responseSerialize: serialize_travelbob_users_VerifyTokenReply,
    responseDeserialize: deserialize_travelbob_users_VerifyTokenReply,
  },
};

exports.UsersAPIClient = grpc.makeGenericClientConstructor(UsersAPIService);
