import { Document, Schema, model } from "mongoose";

/*
 * The interface defines the document type. Used in the code.
 */
export interface IDbBlogpost extends Document {
    id: number,
    title: string,
    text: string,
    blogId: number,
    headerImageUrl?: string,
    travelDateUnixTimestamp: number,
    location: string,
    summary: string,
    author: string
}

/*
 * The schema defines how the data is saved in the database.
 * Required fields must be set when the model.save() method is called.
 *  Otherwise en exception is thrown.
 */
export const BlogpostSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    blogId: { type: Number, required: true },
    headerImageUrl: { type: String, required: false },
    travelDateUnixTimestamp: { type: Number, required: true },
    location: { type: String, required: true },
    summary: { type: String, required: true },
    author: { type: String, required: true },
});

/*
 * The mongoose model for a Blogpost.
 */
export const DbBlogpost = model<IDbBlogpost>('Blogpost', BlogpostSchema);