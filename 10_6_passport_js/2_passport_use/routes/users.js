//this router is called by index.js router  (main router)
const express = require('express');

//how to use express router
const router = express.Router();

//
const passport = require('passport');

//how to user controllers
const userController = require('../controllers/user_controller');

//response to users when /profile url is written in browser 
router.get('/profile',userController.profile);

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
    {failureRedirect: '/users/sign-in'}
),userController.createSession);



//make available for other router
module.exports = router;