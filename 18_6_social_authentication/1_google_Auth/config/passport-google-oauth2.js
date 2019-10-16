const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use new google oauth strategy
passport.use(new googleStrategy(
    {
        //google cloud project keys
        clientID: "1063698776179-mk1rvvvauf47qn6gj3qf6h3dn0h76c0i.apps.googleusercontent.com",
        clientSecret: "Obb0Xr4EAZZl0aku8uQ5VilW",
        callbackURL: "http://localhost:8000/users/auth/google/callback"
    },
    function(acessToken,refreshToken,profile,done){
        //find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err,user){
            if(err){
                console.log('error in google strategy passport',err);
                return done(err,false);
            }
            console.log(profile);
            if(user){
                //if found set this user as req.user
                return done(null,user);
            }
            else{
                //if not found create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err,user){
                    if(err){
                        console.log('error in creating user',err);
                        return done(err,false);
                    }
                    return done(null,user);
                });
            }
        });
    }
));


module.exports = passport;