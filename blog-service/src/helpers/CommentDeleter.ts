import { CommentsAPIClient } from "../../../api/grpc-ts/comments_grpc_pb";
import { EnvProvider } from "./EnvProvider";
import { isNullOrUndefined } from "util";
import { Metadata, credentials, ServiceError } from "grpc";
import {
    DeleteCommentRequest, DeleteCommentReply,
    GetCommentsReply, GetCommentsRequest,
    Comment
} from "../../../api/grpc-ts/comments_pb";


class CommentDeleter {

    private commentssAPIClient: CommentsAPIClient;

    constructor() {
        const port: string = `${EnvProvider.COMMENT_SERVICE_ADDRESS}:9091`;
        console.log(`[CommentDeleter] Connecting to comment service on ${port}.`);
        this.commentssAPIClient = new CommentsAPIClient(port, credentials.createInsecure(), null);
    }

    /**
     * Delete a comment that belongs to a blogpost.
     * @param blogpostId the id of a blogpost.
     * @param metadata the metadata of the gRPC request. Needed to authenticate.
     */
    public DeleteCommentsOfBlogpost(blogpostId: number, metadata: Metadata): void {

        console.log(`[CommentDeleter] DeleteCommentsOfBlogpost: ${blogpostId}.`)
        const reply: GetCommentsRequest = new GetCommentsRequest();
        reply.setBlogpostId(blogpostId);
        this.commentssAPIClient.getComments(reply, metadata, (error: ServiceError, response: GetCommentsReply) => {

            if (error || isNullOrUndefined(response)) {
                console.error(`[CommentDeleter] Error while getting comments. Response: ${response}`, error);
                return;
            }
            const comments: Comment[] = response.getCommentsList();
            if (!isNullOrUndefined(comments) && comments.length > 0) {
                for (let i = 0; i < comments.length; i++) {

                    const deleteRequest: DeleteCommentRequest = new DeleteCommentRequest();
                    deleteRequest.setCommentId(comments[i].getId());

                    this.commentssAPIClient.deleteComment(deleteRequest, metadata, (error: ServiceError, response: DeleteCommentReply) => {

                        if (error || isNullOrUndefined(response)) {
                            console.error(`[CommentDeleter] Error while deleting comment. Response: ${response}`, error);
                            return;
                        }
                    });
                }
            }
        });
    }
}

export { CommentDeleter };