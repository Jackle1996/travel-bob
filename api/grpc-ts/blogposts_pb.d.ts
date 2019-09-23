// package: travelbob.blogs
// file: blogposts.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class AllBlogsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllBlogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AllBlogsRequest): AllBlogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllBlogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllBlogsRequest;
    static deserializeBinaryFromReader(message: AllBlogsRequest, reader: jspb.BinaryReader): AllBlogsRequest;
}

export namespace AllBlogsRequest {
    export type AsObject = {
    }
}

export class AllBlogsReply extends jspb.Message { 
    clearBlogsList(): void;
    getBlogsList(): Array<Blog>;
    setBlogsList(value: Array<Blog>): void;
    addBlogs(value?: Blog, index?: number): Blog;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllBlogsReply.AsObject;
    static toObject(includeInstance: boolean, msg: AllBlogsReply): AllBlogsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllBlogsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllBlogsReply;
    static deserializeBinaryFromReader(message: AllBlogsReply, reader: jspb.BinaryReader): AllBlogsReply;
}

export namespace AllBlogsReply {
    export type AsObject = {
        blogsList: Array<Blog.AsObject>,
    }
}

export class BlogpostsRequest extends jspb.Message { 
    getBlogid(): number;
    setBlogid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogpostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogpostsRequest): BlogpostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogpostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogpostsRequest;
    static deserializeBinaryFromReader(message: BlogpostsRequest, reader: jspb.BinaryReader): BlogpostsRequest;
}

export namespace BlogpostsRequest {
    export type AsObject = {
        blogid: number,
    }
}

export class BlogpostsReply extends jspb.Message { 
    clearBlogpostsList(): void;
    getBlogpostsList(): Array<Blogpost>;
    setBlogpostsList(value: Array<Blogpost>): void;
    addBlogposts(value?: Blogpost, index?: number): Blogpost;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogpostsReply.AsObject;
    static toObject(includeInstance: boolean, msg: BlogpostsReply): BlogpostsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogpostsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogpostsReply;
    static deserializeBinaryFromReader(message: BlogpostsReply, reader: jspb.BinaryReader): BlogpostsReply;
}

export namespace BlogpostsReply {
    export type AsObject = {
        blogpostsList: Array<Blogpost.AsObject>,
    }
}

export class Blog extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getBlogimageurl(): string;
    setBlogimageurl(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getAuthor(): string;
    setAuthor(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getDestination(): string;
    setDestination(value: string): void;


    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): Timestamp | undefined;
    setStartdate(value?: Timestamp): void;


    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): Timestamp | undefined;
    setEnddate(value?: Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blog.AsObject;
    static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blog;
    static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
    export type AsObject = {
        id: number,
        blogimageurl: string,
        description: string,
        author: string,
        title: string,
        destination: string,
        startdate?: Timestamp.AsObject,
        enddate?: Timestamp.AsObject,
    }
}

export class Blogpost extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getHeaderimageurl(): string;
    setHeaderimageurl(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getText(): string;
    setText(value: string): void;

    getBlogid(): number;
    setBlogid(value: number): void;


    hasTraveldate(): boolean;
    clearTraveldate(): void;
    getTraveldate(): Timestamp | undefined;
    setTraveldate(value?: Timestamp): void;

    getLocation(): string;
    setLocation(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blogpost.AsObject;
    static toObject(includeInstance: boolean, msg: Blogpost): Blogpost.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Blogpost, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blogpost;
    static deserializeBinaryFromReader(message: Blogpost, reader: jspb.BinaryReader): Blogpost;
}

export namespace Blogpost {
    export type AsObject = {
        id: number,
        headerimageurl: string,
        title: string,
        text: string,
        blogid: number,
        traveldate?: Timestamp.AsObject,
        location: string,
    }
}

export class Timestamp extends jspb.Message { 
    getSeconds(): number;
    setSeconds(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Timestamp.AsObject;
    static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Timestamp;
    static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
    export type AsObject = {
        seconds: number,
    }
}