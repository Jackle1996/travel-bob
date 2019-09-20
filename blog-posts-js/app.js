const grpc = require('@grpc/grpc-js');
const envProvider = require('./env_provider');
const grpcHelper = require('./grpc_helper');

console.log(envProvider.DbUser);

let server = grpcHelper.getServer();
server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(), // no SSL
    (err, port) => {
        err ? console.error(err)
            : server.start();
    });
console.log('Server started.');
