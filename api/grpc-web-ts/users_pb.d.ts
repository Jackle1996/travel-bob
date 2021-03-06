import * as jspb from "google-protobuf"

export class CreateNewUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): void;
  hasUser(): boolean;
  clearUser(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewUserRequest): CreateNewUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNewUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewUserRequest;
  static deserializeBinaryFromReader(message: CreateNewUserRequest, reader: jspb.BinaryReader): CreateNewUserRequest;
}

export namespace CreateNewUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class CreateNewUserReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewUserReply): CreateNewUserReply.AsObject;
  static serializeBinaryToWriter(message: CreateNewUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewUserReply;
  static deserializeBinaryFromReader(message: CreateNewUserReply, reader: jspb.BinaryReader): CreateNewUserReply;
}

export namespace CreateNewUserReply {
  export type AsObject = {
  }
}

export class LogInRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogInRequest): LogInRequest.AsObject;
  static serializeBinaryToWriter(message: LogInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogInRequest;
  static deserializeBinaryFromReader(message: LogInRequest, reader: jspb.BinaryReader): LogInRequest;
}

export namespace LogInRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LogInReply extends jspb.Message {
  getJwt(): string;
  setJwt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogInReply.AsObject;
  static toObject(includeInstance: boolean, msg: LogInReply): LogInReply.AsObject;
  static serializeBinaryToWriter(message: LogInReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogInReply;
  static deserializeBinaryFromReader(message: LogInReply, reader: jspb.BinaryReader): LogInReply;
}

export namespace LogInReply {
  export type AsObject = {
    jwt: string,
  }
}

export class VerifyTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenRequest): VerifyTokenRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenRequest;
  static deserializeBinaryFromReader(message: VerifyTokenRequest, reader: jspb.BinaryReader): VerifyTokenRequest;
}

export namespace VerifyTokenRequest {
  export type AsObject = {
  }
}

export class VerifyTokenReply extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenReply.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenReply): VerifyTokenReply.AsObject;
  static serializeBinaryToWriter(message: VerifyTokenReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenReply;
  static deserializeBinaryFromReader(message: VerifyTokenReply, reader: jspb.BinaryReader): VerifyTokenReply;
}

export namespace VerifyTokenReply {
  export type AsObject = {
    valid: boolean,
  }
}

export class User extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getIsBlogger(): boolean;
  setIsBlogger(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userName: string,
    email: string,
    password: string,
    isBlogger: boolean,
  }
}

