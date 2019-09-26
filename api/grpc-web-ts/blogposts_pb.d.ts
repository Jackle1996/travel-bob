import * as jspb from "google-protobuf"

export class AllBlogsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllBlogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllBlogsRequest): AllBlogsRequest.AsObject;
  static serializeBinaryToWriter(message: AllBlogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllBlogsRequest;
  static deserializeBinaryFromReader(message: AllBlogsRequest, reader: jspb.BinaryReader): AllBlogsRequest;
}

export namespace AllBlogsRequest {
  export type AsObject = {
  }
}

export class AllBlogsReply extends jspb.Message {
  getBlogsList(): Array<Blog>;
  setBlogsList(value: Array<Blog>): void;
  clearBlogsList(): void;
  addBlogs(value?: Blog, index?: number): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllBlogsReply.AsObject;
  static toObject(includeInstance: boolean, msg: AllBlogsReply): AllBlogsReply.AsObject;
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
  getBlogpostsList(): Array<Blogpost>;
  setBlogpostsList(value: Array<Blogpost>): void;
  clearBlogpostsList(): void;
  addBlogposts(value?: Blogpost, index?: number): Blogpost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlogpostsReply.AsObject;
  static toObject(includeInstance: boolean, msg: BlogpostsReply): BlogpostsReply.AsObject;
  static serializeBinaryToWriter(message: BlogpostsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlogpostsReply;
  static deserializeBinaryFromReader(message: BlogpostsReply, reader: jspb.BinaryReader): BlogpostsReply;
}

export namespace BlogpostsReply {
  export type AsObject = {
    blogpostsList: Array<Blogpost.AsObject>,
  }
}

export class CreateBlogRequest extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): void;
  hasBlog(): boolean;
  clearBlog(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlogRequest): CreateBlogRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlogRequest;
  static deserializeBinaryFromReader(message: CreateBlogRequest, reader: jspb.BinaryReader): CreateBlogRequest;
}

export namespace CreateBlogRequest {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class CreateBlogReply extends jspb.Message {
  getBlogid(): number;
  setBlogid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlogReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlogReply): CreateBlogReply.AsObject;
  static serializeBinaryToWriter(message: CreateBlogReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlogReply;
  static deserializeBinaryFromReader(message: CreateBlogReply, reader: jspb.BinaryReader): CreateBlogReply;
}

export namespace CreateBlogReply {
  export type AsObject = {
    blogid: number,
  }
}

export class CreateBlogpostRequest extends jspb.Message {
  getBlogpost(): Blogpost | undefined;
  setBlogpost(value?: Blogpost): void;
  hasBlogpost(): boolean;
  clearBlogpost(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlogpostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlogpostRequest): CreateBlogpostRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBlogpostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlogpostRequest;
  static deserializeBinaryFromReader(message: CreateBlogpostRequest, reader: jspb.BinaryReader): CreateBlogpostRequest;
}

export namespace CreateBlogpostRequest {
  export type AsObject = {
    blogpost?: Blogpost.AsObject,
  }
}

export class CreateBlogpostReply extends jspb.Message {
  getBlogpostid(): number;
  setBlogpostid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlogpostReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlogpostReply): CreateBlogpostReply.AsObject;
  static serializeBinaryToWriter(message: CreateBlogpostReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlogpostReply;
  static deserializeBinaryFromReader(message: CreateBlogpostReply, reader: jspb.BinaryReader): CreateBlogpostReply;
}

export namespace CreateBlogpostReply {
  export type AsObject = {
    blogpostid: number,
  }
}

export class DeleteBlogRequest extends jspb.Message {
  getBlogid(): number;
  setBlogid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogRequest): DeleteBlogRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogRequest;
  static deserializeBinaryFromReader(message: DeleteBlogRequest, reader: jspb.BinaryReader): DeleteBlogRequest;
}

export namespace DeleteBlogRequest {
  export type AsObject = {
    blogid: number,
  }
}

export class DeleteBlogReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogReply): DeleteBlogReply.AsObject;
  static serializeBinaryToWriter(message: DeleteBlogReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogReply;
  static deserializeBinaryFromReader(message: DeleteBlogReply, reader: jspb.BinaryReader): DeleteBlogReply;
}

export namespace DeleteBlogReply {
  export type AsObject = {
  }
}

export class DeleteBlogpostRequest extends jspb.Message {
  getBlogpostid(): number;
  setBlogpostid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogpostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogpostRequest): DeleteBlogpostRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBlogpostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogpostRequest;
  static deserializeBinaryFromReader(message: DeleteBlogpostRequest, reader: jspb.BinaryReader): DeleteBlogpostRequest;
}

export namespace DeleteBlogpostRequest {
  export type AsObject = {
    blogpostid: number,
  }
}

export class DeleteBlogpostReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogpostReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogpostReply): DeleteBlogpostReply.AsObject;
  static serializeBinaryToWriter(message: DeleteBlogpostReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogpostReply;
  static deserializeBinaryFromReader(message: DeleteBlogpostReply, reader: jspb.BinaryReader): DeleteBlogpostReply;
}

export namespace DeleteBlogpostReply {
  export type AsObject = {
  }
}

export class UpdateBlogRequest extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): void;
  hasBlog(): boolean;
  clearBlog(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlogRequest): UpdateBlogRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlogRequest;
  static deserializeBinaryFromReader(message: UpdateBlogRequest, reader: jspb.BinaryReader): UpdateBlogRequest;
}

export namespace UpdateBlogRequest {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class UpdateBlogReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlogReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlogReply): UpdateBlogReply.AsObject;
  static serializeBinaryToWriter(message: UpdateBlogReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlogReply;
  static deserializeBinaryFromReader(message: UpdateBlogReply, reader: jspb.BinaryReader): UpdateBlogReply;
}

export namespace UpdateBlogReply {
  export type AsObject = {
  }
}

export class UpdateBlogpostRequest extends jspb.Message {
  getBlogposts(): Blogpost | undefined;
  setBlogposts(value?: Blogpost): void;
  hasBlogposts(): boolean;
  clearBlogposts(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlogpostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlogpostRequest): UpdateBlogpostRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlogpostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlogpostRequest;
  static deserializeBinaryFromReader(message: UpdateBlogpostRequest, reader: jspb.BinaryReader): UpdateBlogpostRequest;
}

export namespace UpdateBlogpostRequest {
  export type AsObject = {
    blogposts?: Blogpost.AsObject,
  }
}

export class UpdateBlogpostReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlogpostReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlogpostReply): UpdateBlogpostReply.AsObject;
  static serializeBinaryToWriter(message: UpdateBlogpostReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlogpostReply;
  static deserializeBinaryFromReader(message: UpdateBlogpostReply, reader: jspb.BinaryReader): UpdateBlogpostReply;
}

export namespace UpdateBlogpostReply {
  export type AsObject = {
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

  getStartdate(): Timestamp | undefined;
  setStartdate(value?: Timestamp): void;
  hasStartdate(): boolean;
  clearStartdate(): void;

  getEnddate(): Timestamp | undefined;
  setEnddate(value?: Timestamp): void;
  hasEnddate(): boolean;
  clearEnddate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blog.AsObject;
  static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
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

  getTraveldate(): Timestamp | undefined;
  setTraveldate(value?: Timestamp): void;
  hasTraveldate(): boolean;
  clearTraveldate(): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blogpost.AsObject;
  static toObject(includeInstance: boolean, msg: Blogpost): Blogpost.AsObject;
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
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number,
  }
}

