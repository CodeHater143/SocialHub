//this router is called by index.js router  (main router)
const express = require('express');
//
const passport = require('passport');

//how to use express router
const router = express.Router();

//how to user controllers
const userController = require('../controllers/user_controller');

//response to users when /profile url is written in browser 
router.get('/profile',passport.checkAuthentication,userController.profile);

//response to users when /signIn url is written in browser
router.get('/sign-in',userController.signIn);

//response to users when /signUp url is written in browser
router.get('/sign-up',userController.signUp)

//when user signUp
router.post('/create',userController.create);

//when user signIn
//router.post('/create-session',userController.createSession);

//use passport as midleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'}
),userController.createSession);



//make available for other router
module.exports = router;