//this router is called by index.js router  (main router)
const express = require('express');

//how to use express router
const router = express.Router();

//
const passport = require('passport');



//how to user controllers
const userController = require('../controllers/user_controller');

//response to users when /profile url is written in browser 
router.get('/profile',passport.checkAuthentication,userController.profile);

//response to users when /signIn url is written in browser
router.get('/sign-in',userController.signIn);

//response to users when /signUp url is written in browser
router.get('/sign-up',userController.signUp)

//when user signUp and create a new user
router.post('/create',userController.create);


//use passport as midleware to authenticate when user sign in 
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'}
),userController.createSession);

//to destroy session when user logout
router.get('/sign-out',userController.destroySession);



//make available for other router
module.exports = router;