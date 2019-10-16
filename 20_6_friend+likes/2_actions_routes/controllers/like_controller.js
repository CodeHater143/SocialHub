const Like = require('../models/like');
const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.toggleLike = async function(req,res){
    try{
        let likeable;
        let deleted = false;

        if(req.query.type == 'Post'){
            likeable = await Post.findById(req.query.id).populate('like');
        }
        else{
            likeable = await Comment.findById(req.query.id).populate('like');
        }

        //check if a like already exist
        let existingLikes = await Like.findOne({
            likeable: req.query.id,
            onModel: req.query.type,
            user: req.user.id
        });
        //if a like already exist then delete it
        if(existingLikes){
            likeable.like.pull(existingLikes._id);
            likeable.save();
            existingLikes.remove();
            deleted = true;
        }
        else{
            //else make a new like
            let newLikes = await Like.create({
                user: req.query.id,
                likeable: req.query.id,
                onModel: req.query.type
            });

            likeable.like.push(Like._id);
            likeable.save();
        }

        return res.status(200).json({
            message: "Request Successful",
            data: {
                deleted: deleted
            }
        })

    }catch(err){
        console.log('error in creating toggle switch',err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}