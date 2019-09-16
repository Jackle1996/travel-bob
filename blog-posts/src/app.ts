import { DbAccess } from "./db_access";

class App {
    logNumber(a: number): void {
        console.log(a);
    }

    async testCreateBlog(): Promise<void> {
        let dba = new DbAccess();
        dba.Connect();
        dba.CreateBlogTest();
        let blogs = await dba.GetAllBlogs();
        console.log('blogposts:', blogs)

        let posts = await dba.GetAllBlogposts(blogs[0].id);
        console.log('posts: ', posts);

        await dba.Disconnect();
    }
}

let app = new App();
app.logNumber(9999999999999999);
app.testCreateBlog();
