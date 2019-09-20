const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    blogImageUrl: { type: String, required: false },
    author: { type: String, required: true },
});
const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = { BlogModel };