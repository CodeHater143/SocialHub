//
const Post = require('../models/post');

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
        return res.render('home', {
            title: "Codeial | Home",
            posts:  post
        });
    });
    
}