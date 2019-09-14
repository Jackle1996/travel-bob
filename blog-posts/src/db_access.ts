import * as mongoose from "mongoose";
import { EnvProvider } from "./env_provider";
import { IBlog, Blog } from "./models/Blog";

class DbAccess {

    Connect(): void {

        console.log("connect");
        let connectionUri = `mongodb+srv://${EnvProvider.DbUser}:${EnvProvider.DbPassword}@travelbobcluster-on2qn.azure.mongodb.net/test?retryWrites=true&w=majority`;
        mongoose.connect(
            connectionUri,
            { useNewUrlParser: true });

        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log("connected to the db!");
            let b = new Blog();
            b.id = 123;
            b.blogImageUrl = "https://nowhere.com";
            b.name = "TestBlog";
            b.author = "not Bob";
            b.save((err: any, product: IBlog) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`Blog ${product.name} saved successfully.`);
                db.close();
            });
        });
    }

    Test(): void {

    }
}

export default DbAccess;