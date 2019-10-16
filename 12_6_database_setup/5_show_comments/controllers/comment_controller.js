const Comment = require('../models/comment');

const Post = require('../models/post');

module.exports.create = function(req,res){
    Post.findById(req.body.post,function(err,post){
        if(err)
        {
            console.log('error in finding the post-->while commenting',err);
            return ;
        }
        Comment.create(
            {
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            },function(err,comments){
                if(err)
                {
                    console.log('error in creating comment -->while creating',err);
                    return;
                }
               // console.log(comments);
                post.comments.push(comments);
                post.save();
                return res.redirect('/');
            }
        );
    
    });
}