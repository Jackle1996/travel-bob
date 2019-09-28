// package: travelbob.users
// file: users.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class CreateNewUserRequest extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;


    hasPermissions(): boolean;
    clearPermissions(): void;
    getPermissions(): Permissions | undefined;
    setPermissions(value?: Permissions): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNewUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNewUserRequest): CreateNewUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNewUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNewUserRequest;
    static deserializeBinaryFromReader(message: CreateNewUserRequest, reader: jspb.BinaryReader): CreateNewUserRequest;
}

export namespace CreateNewUserRequest {
    export type AsObject = {
        userName: string,
        email: string,
        password: string,
        permissions?: Permissions.AsObject,
    }
}

export class CreateNewUserReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNewUserReply.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNewUserReply): CreateNewUserReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNewUserReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNewUserReply;
    static deserializeBinaryFromReader(message: CreateNewUserReply, reader: jspb.BinaryReader): CreateNewUserReply;
}

export namespace CreateNewUserReply {
    export type AsObject = {
    }
}

export class LogInRequest extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogInRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogInRequest): LogInRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogInRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogInRequest;
    static deserializeBinaryFromReader(message: LogInRequest, reader: jspb.BinaryReader): LogInRequest;
}

export namespace LogInRequest {
    export type AsObject = {
        userName: string,
        password: string,
    }
}

export class LogInReply extends jspb.Message { 
    getJwt(): string;
    setJwt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogInReply.AsObject;
    static toObject(includeInstance: boolean, msg: LogInReply): LogInReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogInReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogInReply;
    static deserializeBinaryFromReader(message: LogInReply, reader: jspb.BinaryReader): LogInReply;
}

export namespace LogInReply {
    export type AsObject = {
        jwt: string,
    }
}

export class Permissions extends jspb.Message { 
    getIsAdmin(): boolean;
    setIsAdmin(value: boolean): void;

    getIsAuthor(): boolean;
    setIsAuthor(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Permissions.AsObject;
    static toObject(includeInstance: boolean, msg: Permissions): Permissions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Permissions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Permissions;
    static deserializeBinaryFromReader(message: Permissions, reader: jspb.BinaryReader): Permissions;
}

export namespace Permissions {
    export type AsObject = {
        isAdmin: boolean,
        isAuthor: boolean,
    }
}
