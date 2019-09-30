import * as mongoose from 'mongoose';
import { EnvProvider } from '../../common/EnvProvider';
import { IDbBlog, DbBlog } from './models/Blog';
import { IDbBlogpost, DbBlogpost } from "./models/Blogpost";
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
        let dbName = 'blog-microservice';
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
     * Save new blog to database.
     * Returns the id of the new blog or null if an error occurred.
     */
    public async CreateNewBlog(newBlog: IDbBlog): Promise<number> {

        console.log(`[DatabaseAccess] Creating new blog "${newBlog.title}".`);

        newBlog.id = await this.GetUniqueBlogId();

        const dbBlog: void | IDbBlog = await newBlog.save().catch((reason: any) => {
            console.error(`[DatabaseAccess] Error while saving new blog: `, reason);
        });

        if (isNullOrUndefined(dbBlog)) {
            return null;
        } else {
            console.log(`[DatabaseAccess] Blog ${(<IDbBlog>dbBlog).id}: "${(<IDbBlog>dbBlog).title}" saved successfully.`);
            return (<IDbBlog>dbBlog).id;
        }
    }

    /*
     * Save new blogpost to database.
     * Returns the id of the new blogpost or null if an error occurred.
     */
    public async CreateNewBlogpost(newBlogpost: IDbBlogpost): Promise<number> {

        console.log(`[DatabaseAccess] Creating new blogpost "${newBlogpost.title}".`);

        const blogExists: boolean = await this.CheckIfBlogExists(newBlogpost.blogId);
        if (!blogExists) {
            console.log(`[DatabaseAccess] Error: blog with id ${newBlogpost.blogId} does not exist.`);
            return null;
        }

        newBlogpost.id = await this.GetUniqueBlogpostId();

        const dbBlogpost: void | IDbBlogpost = await newBlogpost.save().catch((reason: any) => {
            console.error(`[DatabaseAccess] Error while saving new blogpost: `, reason);
        });

        if (isNullOrUndefined(dbBlogpost)) {
            return null;
        } else {
            console.log(`[DatabaseAccess] Blog ${(<IDbBlogpost>dbBlogpost).id}: "${(<IDbBlogpost>dbBlogpost).title}" saved successfully.`);
            return (<IDbBlogpost>dbBlogpost).id;
        }
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

    /**
     * Delete a blog and all its blogposts from the database.
     */
    public async DeleteBlog(blogId: number): Promise<boolean> {
        const blogDeleteResult = await DbBlog.deleteOne({ id: blogId }).exec();
        const ok = blogDeleteResult.deletedCount === 1;
        if (ok) {
            const postsDeleteResult = await DbBlogpost.deleteMany({ blogId: blogId }).exec();
            console.log(`[DatabaseAccess] Deleted blog ${blogId} and its ${postsDeleteResult.deletedCount} blogposts.`)
        } else {
            console.error(`[DatabaseAccess] Could not delete blog ${blogId}. Result from db: `, blogDeleteResult);
        }
        return ok;
    }

    /**
     * Delete a blogpost from the database.
     */
    public async DeleteBlogpost(blogpostId: number) {
        const blogpostDeleteResult = await DbBlogpost.deleteOne({ id: blogpostId }).exec();
        const ok = blogpostDeleteResult.deletedCount === 1;
        if (ok) {
            console.log(`[DatabaseAccess] Deleted blogpost ${blogpostId}.`)
        } else {
            console.error(`[DatabaseAccess] Could not delete blog ${blogpostId}. Result from db:`, blogpostDeleteResult);
        }
        return ok;
    }

    public async UpdateBlog(blog: IDbBlog): Promise<boolean> {

        const result = await DbBlog.updateOne({ id: blog.id }, {
            id: blog.id,
            blogImageUrl: blog.blogImageUrl,
            description: blog.description,
            author: blog.author,
            title: blog.title,
            destination: blog.destination,
            startUnixTimestamp: blog.startUnixTimestamp,
            endUnixTimestamp: blog.endUnixTimestamp,
        });
        const ok: boolean = result.nModified === 1;
        if (ok) {
            console.log(`[DatabaseAccess] Updated blog ${blog.id}.`)
        } else {
            console.error(`[DatabaseAccess] Could not update blog ${blog.id}. Result from db:`, result)
        }
        return ok;
    }

    public async UpdateBlogpost(blogpost: IDbBlogpost): Promise<boolean> {

        const result = await DbBlogpost.updateOne({ id: blogpost.id }, {
            id: blogpost.id,
            title: blogpost.title,
            text: blogpost.text,
            blogId: blogpost.blogId,
            headerImageUrl: blogpost.headerImageUrl,
            travelDateUnixTimestamp: blogpost.travelDateUnixTimestamp,
            location: blogpost.location,
            summary: blogpost.summary
        });
        const ok: boolean = result.nModified === 1;
        if (ok) {
            console.log(`[DatabaseAccess] Updated blogpost ${blogpost.id}.`)
        } else {
            console.error(`[DatabaseAccess] Could not update blogpost ${blogpost.id}. Result from db:`, result)
        }
        return ok;
    }

    /**
     * Get a unique id for a new blog.
     */
    private async GetUniqueBlogId(): Promise<number> {
        const blogWithMaxId: void | IDbBlog = await DbBlog.findOne()
            .sort('-id')
            .exec()
            .catch((reason: any) => {
                console.log(`[DatabaseAccess] Can't find any comment in database. Creating initial id.`);
        });
        if (isNullOrUndefined(blogWithMaxId)) {
            return 1;
        } else {
            return (<IDbBlog>blogWithMaxId).id + 1;
        }
    }

    /**
     * Get a unique id for a new blogpost.
     */
    private async GetUniqueBlogpostId(): Promise<number> {
        const postWithMaxId: void | IDbBlogpost = await DbBlogpost.findOne()
            .sort('-id')
            .exec()
            .catch((reason: any) => {
                console.log(`[DatabaseAccess] Can't find any comment in database. Creating initial id.`);
        });
        if (isNullOrUndefined(postWithMaxId)) {
            return 1;
        } else {
            return (<IDbBlogpost>postWithMaxId).id + 1;
        }
    }

    public async CheckIfBlogExists(blogId: Number): Promise<boolean> {

        if (blogId === null || blogId <= 0) {
            return false;
        }

        const blog: void | IDbBlog = await DbBlog.findOne({ id: blogId }).exec().catch((reason: any) => {
            console.log(`[DatabaseAccess] Can't find any blog with id ${blogId} in database.`);
        });

        return !isNullOrUndefined(blog);
    }
}
