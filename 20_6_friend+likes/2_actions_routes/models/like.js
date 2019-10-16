const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },

    //this defines the object id of liked object
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        refPath: 'onModel'
    },

    //this field is used for defining the type of the liked objects since this is dynamic reference
    onModel: {
        type: String,
        require: true,
        enum: ['Post','Comment']
    }
},{timestamps: true});

const Like = mongoose.model('Likes',likeSchema);

module.exports = Like;