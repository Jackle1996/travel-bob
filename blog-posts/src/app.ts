import { DbAccess } from "./db_access";

class App {
    logNumber(a: number): void {
        console.log(a);
    }

    testCreateBlog(): void {
        let db = new DbAccess();
        db.Connect();
        db.Test();
    }
}

let app = new App();
app.logNumber(9999999999999999);
app.testCreateBlog();
