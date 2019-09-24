import * as mongoose from 'mongoose';
import { EnvProvider } from './EnvProvider';
import { IBlog, Blog } from './models/Blog';
import { IBlogpost, Blogpost } from "./models/Blogpost";

/*
 * Provides functionallity to access the database.
 */
export class DbAccess {

    /*
     * Connect to the MongoDb instance.
     * The connection has to be opened before any other method is called.
     */
    Connect(): void {

        console.log('Connecting to db..');
        let dbName = 'blog-microservice';
        let connectionUri = `mongodb+srv://${EnvProvider.DbUser}:${EnvProvider.DbPassword}@travelbobcluster-on2qn.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`;
        mongoose.connect(connectionUri, { useNewUrlParser: true });
    }

    /*
     * Disconnect from the MongoDB.
     * This method should be called when the app is shut down.
     */
    async Disconnect(): Promise<void> {
        await mongoose.disconnect();
    }

    /*
     * Example usage of the Blog mongoose model.
     * Creates a new Blog and saves it in the db.
     */
    CreateBlogTest(): void {
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log('Connected to the db!');
            let blog: IBlog = new Blog();
            blog.id = 123;
            blog.blogImageUrl = 'https://nowhere.com';
            blog.name = 'TestBlog';
            blog.author = 'not Bob';
            blog.save((err: any, blog: IBlog) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Blog ${blog.name} saved successfully.`);
                }
                mongoose.connection.close();
            });
        });
    }

    /*
     * Get all blogs from the db.
     */
    async GetAllBlogs(): Promise<IBlog[]> {
        return await Blog.find().exec();
    }

    /*
     * Get all blogposts that belong to the specified blog.
     */
    async GetAllBlogposts(blogId: Number): Promise<IBlogpost[]> {
        return await Blogpost.find({ blogId: blogId }).exec();
    }
}
