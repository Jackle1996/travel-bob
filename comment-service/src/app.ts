import { ServerCredentials, Server } from "grpc";
import { CommentsAPI, CommentsAPIService } from './GrpcServer';
import { DatabaseAccess } from "./DatabaseAccess";
import { DbGrpcMapper } from "./DbToGrpcMapper";

const DBA = new DatabaseAccess();

class App {

    public async StartServer(): Promise<void> {

        let connected = await DBA.Connect();
        if (!connected) {
            console.log('[App] DB connection could not be established. Shutting down.')
            return;
        }

        const server: Server = new Server();
        server.addService(CommentsAPIService, new CommentsAPI(DBA, new DbGrpcMapper()));

        const serverPort = '0.0.0.0:9091';
        server.bind(serverPort, ServerCredentials.createInsecure());
        server.start();

        console.log(`[App] gRPC server started at ${serverPort}.`);
    }
}

/*
 * Listend to CTRL+C to disconnect from the DB when the aplication is closed.
 */
process.on('SIGINT', async () => {
    console.log("[App] Caught interrupt signal.");
    DBA.Disconnect();
    process.exit();
});

let app = new App();
console.log(9999999999999999);
app.StartServer();
