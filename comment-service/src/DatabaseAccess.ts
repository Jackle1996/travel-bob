import * as mongoose from 'mongoose';
import { EnvProvider } from './EnvProvider';
import { IDbComment, DbComment } from './models/Comment';
import { isNullOrUndefined } from 'util';

/*
 * Provides functionallity to access the database.
 */
export class DatabaseAccess {

    /*
     * Connect to the MongoDb instance.
     * The connection has to be opened before any other method is called.
     */
    public async Connect(): Promise<Boolean> {

        console.log('[DatabaseAccess] Connecting to db..');

        let connected = false;
        let dbName = 'comment-microservice';
        let connectionUri = `mongodb+srv://${EnvProvider.DbUser}:${EnvProvider.DbPassword}@travelbobcluster-on2qn.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`;

        await mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err: Error) => {

            err ? console.error(`[DatabaseAccess] Error while connecting to mongoDb with user "${EnvProvider.DbUser}": `, err)
                : console.log(`[DatabaseAccess] Connected to db "${dbName}" with user "${EnvProvider.DbUser}".`);
            connected = !err;
        }).catch(err =>
            console.error(`[DatabaseAccess] Mongoose Error: `, err));

        mongoose.connection.on('error', err => {
            console.error('[DatabaseAccess] Mongoose connection error: ', err);
        });

        return connected;
    }

    /*
     * Disconnect from the MongoDB.
     * This method should be called when the app is shut down.
     */
    public Disconnect(): void {

        console.log('[DatabaseAccess] Disconnecting..');
        mongoose.disconnect((err) => {
            err ? console.error(`[DatabaseAccess] Error while disconnecting: `, err)
                : console.log('[DatabaseAccess] Disconnected.');
        });
    }

    /*
     * Save new comment to database.
     */
    public async CreateNewComment(newComment: IDbComment): Promise<void> {

        console.log(`[DatabaseAccess] Creating new comment from user "${newComment.author}".`);

        newComment.id = await this.GetUniqueCommentId();

        newComment.save((err: any, comment: IDbComment) => {
            if (err) {
                console.error(`[DatabaseAccess] Error while saving new comment: `, err);
            } else {
                console.log(`[DatabaseAccess] Comment with id "${comment.id}" saved successfully.`);
            }
        });
    }

    /**
     * Get all comments by blogpost id.
     */
    public async GetCommentsByBlogpostId(blogpostId: number): Promise<Array<IDbComment>> {

        console.log(`[DatabaseAccess] Searching for comments of blogpost with id "${blogpostId}".`);

        const dbComments: IDbComment[] = await DbComment.find({ blogpost_id: blogpostId}).exec();
        return dbComments;
    }

    public async DeleteComment(commentId: number): Promise<boolean> {

        const commentDeleteResult = await DbComment.deleteOne({ id: commentId }).exec();
        const ok = commentDeleteResult.deletedCount === 1;
        if (ok) {
            console.log(`[DatabaseAccess] Deleted comment with id "${commentId}".`)
        } else {
            console.error(`[DatabaseAccess] Could not delete comment with id "${commentId}". Result from db:`, commentDeleteResult);
        }
        return ok;
    }

    /**
     * Get a unique id for a new comment.
     */
    private async GetUniqueCommentId(): Promise<number> {
        const blogWithMaxId: void | IDbComment = await DbComment
            .findOne()
            .sort('-id')
            .exec()
            .catch((reason: any) => {
                console.log(`[DatabaseAccess] Can't find any comment in database. Creating initial id.`);
            });
        if (isNullOrUndefined(blogWithMaxId)) {
            return 1;
        } else {
            return (<IDbComment>blogWithMaxId).id + 1;
        }
    }
}
