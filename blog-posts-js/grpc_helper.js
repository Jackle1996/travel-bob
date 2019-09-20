var grpc = require('@grpc/grpc-js');

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

module.exports = {

    /**
     * @param {!Object} call
     * @param {function():?} callback
     */
    doGetAllBlogs: (call, callback) => {

        let a = {
            id: 1,
            blogImageUrl: 'http://2',
            title: 'haaa3',
            description: 'yolo!',
            author: 'me',
            destination: 'HOE',
            startDate: {seconds: 123456},
            endDate: {seconds: 123457}
        }

        callback(null, {
            blogs: [a]
        }, copyMetadata(call));
    },

    /**
     * @param {!Object} call
     * @param {function():?} callback
     */
    doGetBlogposts: (call, callback) => {
        let blogId = call.request.blogId;
        console.log(`GetBlogpostsRequest received for blogId ${blogId}.`);
        callback(null, {
            blogposts: []
        }, copyMetadata(call));
    }
};