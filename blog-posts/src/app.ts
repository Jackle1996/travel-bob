import { ServerCredentials, Server } from "grpc";
import { BlogsAPI, BlogsAPIService } from './GrpcServer';
import { DbAccess } from "./DatabaseAccess";

class App {
    logNumber(a: number): void {
        console.log(a);
    }

    StartGrpcServer() {
        const server: Server = new Server();
        let dba = new DbAccess();
        dba.Connect();
        server.addService(BlogsAPIService, new BlogsAPI(dba));

        const serverPort = '0.0.0.0:9090';
        server.bind(serverPort, ServerCredentials.createInsecure());
        server.start();

        console.log(`gRPC server started at ${serverPort}.`)
        // TODO: would be whise to call dba.Disconnect() when the server is shut down.
    }
}

let app = new App();
app.logNumber(9999999999999999);
app.StartGrpcServer();
