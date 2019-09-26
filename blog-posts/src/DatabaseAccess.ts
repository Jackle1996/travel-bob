import * as mongoose from 'mongoose';
import { EnvProvider } from './EnvProvider';
import { IDbBlog, DbBlog } from './models/Blog';
import { IDbBlogpost, DbBlogpost } from "./models/Blogpost";

import {
    Blog, Blogpost,
    Timestamp
} from "../../api/grpc-ts/blogposts_pb";

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
        let dbName = 'blog-microservice';
        let connectionUri = `mongodb+srv://${EnvProvider.DbUser}:${EnvProvider.DbPassword}@travelbobcluster-on2qn.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`;

        await mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err: Error) => {

            err ? console.error('[DatabaseAccess] Error while connecting to mongoDb: ' + err, err)
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
     * Save new blog to database.
     */
    public CreateNewBlog(newBlog: IDbBlog): void {

        console.log(`[DatabaseAccess] Creating new blog "${newBlog.title}".`);

        newBlog.save((err: any, blog: IDbBlog) => {
            if (err) {
                console.error(`[DatabaseAccess] Error while saving new blog: `, err);
            } else {
                console.log(`[DatabaseAccess] Blog ${blog.id}: "${blog.title}" saved successfully.`);
            }
        });
    }

    /*
     * Save new blogpost to database.
     */
    public CreateNewBlogpost(newBlogpost: IDbBlogpost): void {

        console.log(`[DatabaseAccess] Creating new blog "${newBlogpost.title}".`);

        newBlogpost.save((err: any, blogpost: IDbBlogpost) => {
            if (err) {
                console.error(`[DatabaseAccess] Error while saving new blogpost: `, err);
            } else {
                console.log(`[DatabaseAccess] Blogpost ${blogpost.id}: "${blogpost.title}" saved successfully.`);
            }
        });
    }

    /*
     * Get all blogs from the database.
     */
    public async GetAllBlogs(): Promise<IDbBlog[]> {
        return await DbBlog.find().exec();
    }

    /*
     * Get all blogposts that belong to the specified blog.
     */
    public async GetAllBlogposts(blogId: Number): Promise<IDbBlogpost[]> {
        return await DbBlogpost.find({ blogId: blogId }).exec();
    }
}
