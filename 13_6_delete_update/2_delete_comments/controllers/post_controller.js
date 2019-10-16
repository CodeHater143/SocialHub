const Post = require('../models/post');
const Comment = require('../models/comment');


module.exports.create = function(req,res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    },function(err,post){
        if(err){
            console.log('error in creating a post',err);
            return;
        }

        return res.redirect('back');
    });
}

module.exports.destroy = function(req,res){
    Post.findById(req.params.id,function(err,post){
        //console.log('i am just amazed');
        if(err){
            console.log('error in deleting post while finding',err);
            return ;
        }
       console.log(post);
       console.log(req.params);
        if(post.id == req.params.id){
            console.log('i am just amazed');
            post.remove();

            Comment.deleteMany({post: req.params.id},function(err){
                return res.redirect('back');
            });
        }
        else{
            return res.redirect('back');
        }
    });
}