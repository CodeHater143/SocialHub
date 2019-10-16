//this router is called by index.js router  (main router)
const express = require('express');

//how to use express router
const router = express.Router();

//how to user controllers
const userController = require('../controllers/user_controller');

//response to users when /profile url is written in browser 
router.get('/profile',userController.profile);

//make available for other router
module.exports = router;