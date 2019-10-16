//this router is called by index.js router  (main router)
const express = require('express');
const router = express.Router();
//how to user controllers
const userController = require('../controllers/user_controller');
//response to users from usercontroller
router.get('/profile',userController.profile)

//make available for other router
module.exports = router;