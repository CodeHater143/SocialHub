const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function(req,res){

    let posts = await Post.find({})
       .sort('-createdAt')
       .populate('user')
       .populate({
           path: 'comment',
           populate: {
               path: 'user'
           }
    });

    return res.status(200).json({
        message: 'list of posts',
        posts: posts
    });
}

module.exports.destroy = async function(req, res){
    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post: req.params.id});

            return res.status(200).json({
                message: "Posts and Associated Comments are Deleted Successfully"
            });

        }
        else{
            return res.status(401).json({
                message: "You cannot Delete this post"
            });
        }

    }
    catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
    
}