//
const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = function(req,res){

    // populate the user of each post
    Post.find({})
    .populate('user')
    .populate({
        path: 'comment',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, post){
        User.find({},function(err,user){
            return res.render('home', {
                title: "Codeial | Home",
                posts:  post,
                all_users: user
            });
        });
        
    });
    
}