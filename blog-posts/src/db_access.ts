import * as mongoose from 'mongoose';
import { EnvProvider } from './env_provider';
import { IBlog, Blog } from './models/Blog';

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
    Disconnect(): void {
        mongoose.disconnect((error?: any) => {
            if (error) {
                console.error('Could not disconnect from db:', error);
            } else {
                console.log('Disconnected from db.')
            }
        });
    }

    /*
     * Example usage of the Blog mongoose model.
     * Creates a new Blog and saves it in the db.
     */
    Test(): void {
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log('Connected to the db!');
            let blog = new Blog();
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
                db.close();
            });
        });
    }
}
