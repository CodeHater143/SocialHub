const User = require('../models/user')  //aquire User collection (Users 11`table from db) from model

//render profile page
module.exports.profile = function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(err){
                console.log('error in cookies');
                return; 
            }
            if(user){
                return res.render('user_profile',{
                    title:"User profile",
                    user:user
                });
            }
        });
    }
    else{

        return res.redirect('/users/sign-in');
    }
    
}

//render signIn page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    });
}

//rennder the signup page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sing Up "
    });
}

//get the sign up data
module.exports.create = function(req,res){

    if(req.body.password != req.body.confirm_password)
    {
        console.log('password does not matched');
        return res.redirect('back')
    }
    User.findOne({email: req.body.email},function(err,user){
        if(err)
        {
            console.log('error in finding user signing up',err);
            return ;
        }
        if(!user)
        {
            // datafield confirm_password will not saved inside database why? :)
            User.create(req.body,function(err,user){  // req.body is a object (complete form data)
                if(err)
                {
                    console.log('error in creating user while signing up',err);
                    return ;
                }
                return res.redirect('/users/sign-in');
            });
        }
        else
        {
            return res.redirect('back');
        }
    });
}

//sign in and create session for user
module.exports.createSession = function(req,res){
    // step to authentication

    //find the user
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error in finding user while signing in',err);
            return;
        }

        //how to handle when user is found
        if(user){

            //how to handle when password does not match
            if(req.body.password != user.password){
                console.log('please enter correct password');
                return res.redirect('back');
            }


            //how to handle session creation
            res.cookie('user_id',user._id);
            return res.redirect('/users/profile');
        }
        else{

            //handle when user is not found
            return res.redirect('back');
        }
    });
}
