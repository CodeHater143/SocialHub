const User = require('../models/user')  //aquire User collection (Users 11`table from db) from model

//render profile page
module.exports.profile = function(req,res){
    User.findById(req.params.id,function(err,user){
        return res.render('user_profile',{
            title:"User profile",
            profile_user: user
        });
    });
}

module.exports.update = async function(req,res){
    if(req.user.id == req.params.id){
        try{
            let user = await User.findById(req.params.id);
            User.uploadedAvatar(req,res,function(err){
                if(err){
                    console.log('****multer error',err);
                    return;
                }
                console.log(req.file);
            });
        }
        catch(err){
            req.flash('error', err);
            return res.redirect('back');
        }
    }
    else{

    }
}

//render signIn page
module.exports.signIn = function(req,res){

    //console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    });
}

//rennder the signup page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){

        return res.redirect('/users/profile');
    }
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
    req.flash('success','logged in successfully');
    return res.redirect('/');
}

//sign out and destroy session for user
module.exports.destroySession = function(req,res){
    req.logout();
    req.flash('success','you have logged out');
    return res.redirect('/');
}
