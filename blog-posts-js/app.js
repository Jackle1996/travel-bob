const PROTO_PATH = '../protos/blogposts.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const envProvider = require('./env_provider');
const grpcHelper = require('./grpc_helper');

console.log(envProvider.DbUser);

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var travelbobBlogs = protoDescriptor.travelbob.blogs;

/**
 * Get a new server with the handler functions in this file bound to the
 * methods it serves.
 * @return {!Server} The new server object
 */
function getServer() {
    const server = new grpc.Server();
    server.addService(travelbobBlogs.BlogsAPI.service, {
        GetAllBlogs: grpcHelper.doGetAllBlogs,
        GetBlogposts: grpcHelper.doGetBlogposts
    });
    return server;
}

let server = getServer();
server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        err ? console.error(err)
            : server.start();
    });
console.log('Server started.');
