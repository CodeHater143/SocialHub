//
const Post = require('../models/post');

module.exports.home = function(req,res){

    //print cookies in console
    //console.log(req.cookies);

    //modify cookie
    //res.cookie('user_id',26);
    /* Post.find({},function(err,post){
        if(err)
        {
            console.log('finding error in posts in database',err);
            return ;
        }
        return res.render('home',{
            title:"Codeial | Home",
            posts: post
        });

    }); */



    //how to populate user from mongoose (all information of posts)
    Post.find({}).populate('user').exec(function(err,post){
        if(err)
        {
            console.log('finding error in posts in database',err);
            return ;
        }

        console.log(post);
        return res.render('home',{
            title:"Codeial | Home",
            posts: post
        });
    });
    
}