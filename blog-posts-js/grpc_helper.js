const PROTO_PATH = '../protos/blogposts.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

/**
 * @param {!Object} call
 * @return {!Object} metadata
 */
function copyMetadata(call) {
    var metadata = call.metadata.getMap();
    var response_metadata = new grpc.Metadata();
    for (var key in metadata) {
        response_metadata.set(key, metadata[key]);
    }
    return response_metadata;
}

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
 * @param {!Object} call
 * @param {function():?} callback
 */
function doGetAllBlogs (call, callback) {

    let a = {
        id: 1,
        blogImageUrl: 'http://2',
        title: 'haaa3',
        description: 'yolo!',
        author: 'me',
        destination: 'HOE',
        startDate: {seconds: 123456},
        endDate: {seconds: 123457}
    };

    callback(null, {
        blogs: [a]
    }, copyMetadata(call));
}

/**
 * @param {!Object} call
 * @param {function():?} callback
 */
function doGetBlogposts (call, callback) {
    let blogId = call.request.blogId;
    console.log(`GetBlogpostsRequest received for blogId ${blogId}.`);
    callback(null, {
        blogposts: []
    }, copyMetadata(call));
}

module.exports = {

    /**
     * Get a new server with the handler functions in this file bound to the
     * methods it serves.
     * @return {!Server} The new server object
     */
    getServer: () => {
        const server = new grpc.Server();
        server.addService(travelbobBlogs.BlogsAPI.service, {
            GetAllBlogs: doGetAllBlogs,
            GetBlogposts: doGetBlogposts
        });
        return server;
    }
};