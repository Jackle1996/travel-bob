import { Document, Schema, model } from "mongoose";

/*
 * The interface defines the document type. Used in the code.
 */
export interface IDbBlog extends Document {
    id: number,
    blogImageUrl?: string,
    description: string,
    author: string,
    title: string,
    destination: string,
    startUnixTimestamp: number,
    endUnixTimestamp: number,
}

/*
 * The schema defines how the data is saved in the database.
 * Required fields must be set when the model.save() method is called.
 *  Otherwise en exception is thrown.
 */
export const BlogSchema = new Schema({
    id: { type: Number, required: true },
    blogImageUrl: { type: String, required: false },
    description: { type: String, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    destination: { type: String, required: true },
    startUnixTimestamp: { type: Number, required: true },
    endUnixTimestamp: { type: Number, required: true },
});

/*
 * The mongoose model for a Blog.
 */
export const DbBlog = model<IDbBlog>('Blog', BlogSchema);