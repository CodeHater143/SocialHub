const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    // posts belongs to user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //name should be same as present in database (collection name)
    },

    //include the array of ids of all comments in this post schema itself
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

},{timestamps:true});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;