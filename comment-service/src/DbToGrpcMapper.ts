import { Comment } from "../../api/grpc-ts/comments_pb";
import { IDbComment, DbComment } from "./models/Comment";
import { isNullOrUndefined } from "util";

/*
 * Helper class to simplify the work with gRPC and database objects.
 */
export class DbGrpcMapper {

    Convert(commentsFromDb: IDbComment[]): Comment[];
    Convert(grpcComment: Comment): IDbComment;

    /*
     * Convert db objects to gRPC objects and vice versa.
     *
     * Supported conversions:
     *
     * DB to gRPC
     * - IDbComment[] to Comment[]
     *
     * gRPC to DB
     * - Comment to IDbComment
     */
    Convert(input: IDbComment[] | Comment)
        : Comment[] | IDbComment {

        if (input instanceof Comment) {

            console.log('[DbGrpcMapper] Convert Comment to IDbComment');
            return this.ConvertGrpcCommentToDbComment(input as Comment);

        } else {

            console.log('[DbGrpcMapper] Convert IDbComment[] to Comment[]');
            return this.ConvertDbCommentsToGrpc(input as IDbComment[]);
        }
    }

    /*
     * Takes a list of database comment objects and
     * converts them into a list of gRPC comment objects.
     */
    private ConvertDbCommentsToGrpc(commentsFromDb: IDbComment[]): Comment[] {

        const grpcComments: Comment[] = new Array<Comment>();
        console.log(commentsFromDb);
        if (!isNullOrUndefined(commentsFromDb)) {

            commentsFromDb.forEach(commentFromDb => {

                const grpcComment: Comment = new Comment();

                grpcComment.setId(commentFromDb.id);
                grpcComment.setText(commentFromDb.text)
                grpcComment.setAuthor(commentFromDb.author);
                grpcComment.setBlogpostId(commentFromDb.blogpost_id)
                grpcComment.setUnixTimestamp(commentFromDb.unix_timestamp);

                grpcComments.push(grpcComment);
            });
        }

        return grpcComments;
    }

    /*
     * Takes a gRPC comment object and converts it into a database comment object.
     */
    private ConvertGrpcCommentToDbComment(grpcComment: Comment): IDbComment {

        const dbComment: IDbComment = new DbComment();

        dbComment.id = grpcComment.getId();
        dbComment.text = grpcComment.getText();
        dbComment.author = grpcComment.getAuthor();
        dbComment.blogpost_id = grpcComment.getBlogpostId();
        dbComment.unix_timestamp = grpcComment.getUnixTimestamp();

        return dbComment;
    }
}