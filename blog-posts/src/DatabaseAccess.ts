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

    public CreateNewBlog(newBlog: Blog): void {

        console.log(`[DatabaseAccess] Creating new blog "${newBlog.getTitle()}".`);

        const blog: IDbBlog = new DbBlog();

        blog.id = newBlog.getId();
        blog.blogImageUrl = newBlog.getBlogimageurl();
        blog.description = newBlog.getDescription();
        blog.author = newBlog.getAuthor();
        blog.title = newBlog.getTitle();
        blog.destination = newBlog.getDestination();
        blog.startUnixTimestamp = newBlog.getStartdate().getSeconds();
        blog.endUnixTimestamp = newBlog.getEnddate().getSeconds();

        blog.save((err: any, blog: IDbBlog) => {
            if (err) {
                console.error(`[DatabaseAccess] Error while saving new blog: `, err);
            } else {
                console.log(`[DatabaseAccess] Blog ${blog.id}: "${blog.title}" saved successfully.`);
            }
        });
    }

    /*
     * Get all blogs from the db.
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
