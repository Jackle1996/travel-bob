const mongoose = require('mongoose');
const blog = require('./models/blog');


module.exports = {
    /*
     * Connect to the database using the user and password provided in the environment variables.
     */
    connect: () => {
        const dbName = 'blog-microservice';
        const connectionUri = `mongodb+srv://${env_provider_1.EnvProvider.DbUser}:${env_provider_1.EnvProvider.DbPassword}@travelbobcluster-on2qn.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`;
        mongoose.connect(connectionUri, { useNewUrlParser: true });
    },

    /*
     * Disconnect from the database.
     */
    disconnect: () => {
        mongoose.disconnect(err => {
            if (err) {
                console.log('error while disconnecting: ' + err);
            }
        });
    },

    /*
     * Get all blogs in the database.
     */
    getAllBlogs: () => {
        // TODO
    }
};