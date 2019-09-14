import { EnvProvider } from "./env_provider";

const connection = `mongodb+srv://${EnvProvider.DbUser}:${EnvProvider.DbPassword}@travelbobcluster-on2qn.azure.mongodb.net/test?retryWrites=true&w=majority`;
console.log(connection);

class App {
    logNumber(a: number) {
        console.log(a);
    }
}

let app = new App();
app.logNumber(9999999999999999);
