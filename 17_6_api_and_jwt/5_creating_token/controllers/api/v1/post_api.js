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

       // if (post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post: req.params.id});

            /* if (req.xhr){
                return res.status(200).json({
                    data: {
                        post_id: req.params.id
                    },
                    message: "Post deleted"
                });
            }
             */

            return res.status(200).json({
                message: "Posts and Associated Comments are Deleted Successfully"
            });
            //req.flash('success','Post and associated comments are destroyed');
            return res.redirect('back');
        /* else{
            req.flash('error','You cannot Delete this post!');
            return res.redirect('back');
        } */

    }
    catch(err){
        //req.flash('error', err);
        console.log('*****',err);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
    
}