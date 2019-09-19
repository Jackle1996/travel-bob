import { DbAccess } from "./db_access";
import { ServerCredentials } from "grpc";
import { IBlog } from "./models/Blog";
import { IBlogpost } from "./models/Blogpost";
import { GrpcServer } from './grpc_server';

class App {
    logNumber(a: number): void {
        console.log(a);
    }

    async testCreateBlog(): Promise<void> {
        let dba = new DbAccess();
        dba.Connect();
        dba.CreateBlogTest();
        let blogs: IBlog[] = await dba.GetAllBlogs();
        console.log('blog:', blogs)

        let posts: IBlogpost[] = await dba.GetAllBlogposts(blogs[0].id);
        console.log('posts: ', posts);

        await dba.Disconnect();
    }

    CreateGrpcServer() {
        let server = GrpcServer.getServer();
        server.bindAsync(
            '0.0.0.0:9090', ServerCredentials.createInsecure(), (err, port) => {
                err
                    ? console.error(err)
                    : server.start();
            });
    }
}

let app = new App();
app.logNumber(9999999999999999);
app.testCreateBlog();
app.CreateGrpcServer();
