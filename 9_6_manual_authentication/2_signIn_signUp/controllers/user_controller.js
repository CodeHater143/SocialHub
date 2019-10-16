//render profile page
module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:"user profile"
    });
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
module.exports.create = function(){

}

//sign in and create session for user
module.exports.createSession = function(req,res){

}
