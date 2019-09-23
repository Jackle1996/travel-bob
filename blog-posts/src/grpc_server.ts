let PROTO_PATH = '../../protos/blogposts.proto';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

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

class GrpcServer {

    constructor() { }

    /**
     * @param {!Object} call
     * @param {function():?} callback
     */
    doGetAllBlogs = function (call, callback) {
        callback(null, {
            blogs: []
        }, copyMetadata(call));
    };

    /**
     * @param {!Object} call
     * @param {function():?} callback
     */
    doGetBlogposts = function (call, callback) {
        let blogId = call.request.blogId;
        callback(null, {
            blogposts: []
        }, copyMetadata(call));
    };

    /**
     * Get a new server with the handler functions in this file bound to the
     * methods it serves.
     * @return {!Server} The new server object
     */
    getServer = function () {
        var server = new grpc.Server();
        server.addService(travelbobBlogs.BlogsAPI.service, {
            GetAllBlogs: doGetAllBlogs,
            GetBlogposts: doGetBlogposts,
        });
        return server;
    };
}
module.exports = GrpcServer;