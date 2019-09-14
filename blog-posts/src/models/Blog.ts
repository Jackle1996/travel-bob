import { Document, Schema, model } from "mongoose";

export interface IBlog extends Document {
    id: Number,
    name: String,
    blogImageUrl?: String,
    author: String
}

export const BlogSchema = new Schema({
    id: {type:Number, required: true},
    name: {type:String, required: true},
    blogImageUrl: {type:String, required: false},
    author: {type:String, required: true},
});

export const Blog = model<IBlog>('Blog', BlogSchema);