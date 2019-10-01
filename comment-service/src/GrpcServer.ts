import { DatabaseAccess } from "./DatabaseAccess";
import { IDbComment } from "./models/Comment";

import { DbGrpcMapper } from "./DbToGrpcMapper";
import { AuthChecker } from "./helpers/AuthChecker";

import { ServerUnaryCall, sendUnaryData } from "grpc";
import { ICommentsAPIServer, CommentsAPIService } from "../../api/grpc-ts/comments_grpc_pb";
import {
    AddCommentRequest, AddCommentReply,
    GetCommentsRequest, GetCommentsReply,
    DeleteCommentRequest, DeleteCommentReply,
    Comment
} from "../../api/grpc-ts/comments_pb";

class CommentsAPI implements ICommentsAPIServer {

    /**
     * Initializes a new instance of the CommentsAPI.
     */
    constructor(
        private databaseAccess: DatabaseAccess,
        private dbToGrpcMapper: DbGrpcMapper) { }

    /**
     * Create a new Comment.
     */
    public async addComment(call: ServerUnaryCall<AddCommentRequest>, callback: sendUnaryData<AddCommentReply>) {

        console.log('[GrpcServer] CommentsAPI.addComment()');

        const reply: AddCommentReply = new AddCommentReply();
        const checkResponse: boolean | Error = await new AuthChecker().CheckMetadataForJWT(call.metadata);
        if (checkResponse instanceof Error) {
            callback(checkResponse, reply);
            return;
        }

        const dbComment: IDbComment = this.dbToGrpcMapper.Convert(call.request.getComment());
        const ok: boolean = await this.databaseAccess.CreateNewComment(dbComment);

        const err = ok ? null : new Error('Error: Could not save new comment. Probably some data missing in the request.')
        callback(err, reply);
    }

    /*
     * Returns a list of all comments in the database that belong to the provided blogpost.
     */
    public async getComments(call: ServerUnaryCall<GetCommentsRequest>, callback: sendUnaryData<GetCommentsReply>): Promise<void> {

        console.log('[GrpcServer] CommentsAPI.getComments()');

        let blogpostId = call.request.getBlogpostId();
        let commentsFromDb: IDbComment[] = await this.databaseAccess.GetCommentsByBlogpostId(blogpostId);

        let commentsForResponse: Comment[] = this.dbToGrpcMapper.Convert(commentsFromDb);

        let reply: GetCommentsReply = new GetCommentsReply();
        reply.setCommentsList(commentsForResponse);

        callback(null, reply);
    }

    /**
     * Delete a comment because it was so inappropriate, offensive and
     * horrible, nobody shall ever have to face the pain of reading it again!
     */
    public async deleteComment(call: ServerUnaryCall<DeleteCommentRequest>, callback: sendUnaryData<DeleteCommentReply>): Promise<void> {

        console.log('[GrpcServer] CommentsAPI.deleteComment()');

        const reply: AddCommentReply = new AddCommentReply();
        const checkResponse: boolean | Error = await new AuthChecker().CheckMetadataForJWT(call.metadata);
        if (checkResponse instanceof Error) {
            callback(checkResponse, reply);
            return;
        }

        const commentId: number = call.request.getCommentId();
        const ok: boolean = await this.databaseAccess.DeleteComment(commentId);
        const err: Error = ok ? null : new Error(`Could not delete comment with id ${commentId}.`);

        callback(err, new DeleteCommentReply());
    }
}

export {
    CommentsAPI,
    CommentsAPIService
}