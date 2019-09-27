// package: travelbob.comments
// file: comments.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class AddCommentRequest extends jspb.Message { 

    hasComment(): boolean;
    clearComment(): void;
    getComment(): Comment | undefined;
    setComment(value?: Comment): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddCommentRequest): AddCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCommentRequest;
    static deserializeBinaryFromReader(message: AddCommentRequest, reader: jspb.BinaryReader): AddCommentRequest;
}

export namespace AddCommentRequest {
    export type AsObject = {
        comment?: Comment.AsObject,
    }
}

export class AddCommentReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddCommentReply.AsObject;
    static toObject(includeInstance: boolean, msg: AddCommentReply): AddCommentReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddCommentReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddCommentReply;
    static deserializeBinaryFromReader(message: AddCommentReply, reader: jspb.BinaryReader): AddCommentReply;
}

export namespace AddCommentReply {
    export type AsObject = {
    }
}

export class GetCommentsRequest extends jspb.Message { 
    getBlogpostId(): number;
    setBlogpostId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCommentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCommentsRequest): GetCommentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCommentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCommentsRequest;
    static deserializeBinaryFromReader(message: GetCommentsRequest, reader: jspb.BinaryReader): GetCommentsRequest;
}

export namespace GetCommentsRequest {
    export type AsObject = {
        blogpostId: number,
    }
}

export class GetCommentsReply extends jspb.Message { 
    clearCommentsList(): void;
    getCommentsList(): Array<Comment>;
    setCommentsList(value: Array<Comment>): void;
    addComments(value?: Comment, index?: number): Comment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCommentsReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetCommentsReply): GetCommentsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCommentsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCommentsReply;
    static deserializeBinaryFromReader(message: GetCommentsReply, reader: jspb.BinaryReader): GetCommentsReply;
}

export namespace GetCommentsReply {
    export type AsObject = {
        commentsList: Array<Comment.AsObject>,
    }
}

export class DeleteCommentRequest extends jspb.Message { 
    getCommentId(): number;
    setCommentId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCommentRequest): DeleteCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCommentRequest;
    static deserializeBinaryFromReader(message: DeleteCommentRequest, reader: jspb.BinaryReader): DeleteCommentRequest;
}

export namespace DeleteCommentRequest {
    export type AsObject = {
        commentId: number,
    }
}

export class DeleteCommentReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCommentReply.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCommentReply): DeleteCommentReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCommentReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCommentReply;
    static deserializeBinaryFromReader(message: DeleteCommentReply, reader: jspb.BinaryReader): DeleteCommentReply;
}

export namespace DeleteCommentReply {
    export type AsObject = {
    }
}

export class Comment extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getText(): string;
    setText(value: string): void;

    getAuthor(): string;
    setAuthor(value: string): void;

    getBlogpostId(): number;
    setBlogpostId(value: number): void;

    getUnixTimestamp(): number;
    setUnixTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Comment.AsObject;
    static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Comment;
    static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
    export type AsObject = {
        id: number,
        text: string,
        author: string,
        blogpostId: number,
        unixTimestamp: number,
    }
}
