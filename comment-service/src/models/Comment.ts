import { Document, Schema, model } from "mongoose";

/*
 * The interface defines the document type. Used in the code.
 */
export interface IDbComment extends Document {
    id: number,
    text: string,
    author: string,
    blogpost_id: number,
    unix_timestamp: number,
}

/*
 * The schema defines how the data is saved in the database.
 * Required fields must be set when the model.save() method is called.
 *  Otherwise en exception is thrown.
 */
export const CommentSchema = new Schema({
    id: { type: Number, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    blogpost_id: { type: Number, required: true },
    unix_timestamp: { type: Number, required: true },
});

/*
 * The mongoose model for a Comment.
 */
export const DbComment = model<IDbComment>('Comment', CommentSchema);