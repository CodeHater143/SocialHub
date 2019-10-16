const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    //comments belongs to a user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //comments also belongs to a post
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},{timestamps: true});

const Comment = mongoose.model('Comments',commentSchema);

module.exports = Comment;