const grpc = require('grpc');
const envProvider = require('./env_provider');
const grpcHelper = require('./grpc_helper');

console.log(envProvider.DbUser);

let server = grpcHelper.getServer();
let serverAddress = '0.0.0.0:9090';
server.bind(serverAddress, grpc.ServerCredentials.createInsecure());
server.start();
console.log('Server started at ' + serverAddress);

