import { Document, Schema, model } from "mongoose";

/*
 * The interface defines the document type. Used in the code.
 */
export interface IBlogpost extends Document {
    id: Number,
    title: String,
    text: String,
    blogId: Number,
    headerImageUrl?: String
}

/*
 * The schema defines how the data is saved in the database.
 * Required fields must be set when the model.save() method is called.
 *  Otherwise en exception is thrown.
 */
export const BlogpostSchema = new Schema({
    id: {type:Number, required: true},
    title: {type:String, required: true},
    text: {type:String, required: true},
    blogId: {type:Number, required: true},
    headerImageUrl: {type:String, required: false},
});

/*
 * The mongoose model for a Blogpost.
 */
export const Blogpost = model<IBlogpost>('Blogpost', BlogpostSchema);