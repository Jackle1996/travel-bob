import { Document, Schema, model } from "mongoose";

/*
 * The interface defines the document type. Used in the code.
 */
export interface IBlog extends Document {
    id: Number,
    name: String,
    blogImageUrl?: String,
    author: String
}

/*
 * The schema defines how the data is saved in the database.
 * Required fields must be set when the model.save() method is called.
 *  Otherwise en exception is thrown.
 */
export const BlogSchema = new Schema({
    id: {type:Number, required: true},
    name: {type:String, required: true},
    blogImageUrl: {type:String, required: false},
    author: {type:String, required: true},
});

/*
 * The mongoose model for a Blog.
 */
export const Blog = model<IBlog>('Blog', BlogSchema);