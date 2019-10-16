//this router is called by index.js router  (main router)
const express = require('express');

//how to use express router
const router = express.Router();

//how to user controllers
const userController = require('../controllers/user_controller');

//response to users when /profile url is written in browser 
router.get('/profile',userController.profile);

//response to users when /signIn url is written in browser
router.get('/sign-in',userController.signIn);

//response to users when /signUp url is written in browser
router.get('/sign-up',userController.signUp)

router.post('/create',userController.create);



//make available for other router
module.exports = router;