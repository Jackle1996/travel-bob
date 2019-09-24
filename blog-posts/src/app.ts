import { ServerCredentials, Server } from "grpc";
import { BlogsAPI, BlogsAPIService } from './grpc_server';

class App {
    logNumber(a: number): void {
        console.log(a);
    }

    CreateGrpcServer() {
        const server: Server = new Server();
        server.addService(BlogsAPIService, new BlogsAPI());

        const serverPort = '0.0.0.0:9090';
        server.bind(serverPort, ServerCredentials.createInsecure());
        server.start();

        console.log(`gRPC server started at ${serverPort}.`)
    }
}

let app = new App();
app.logNumber(9999999999999999);
app.CreateGrpcServer();
