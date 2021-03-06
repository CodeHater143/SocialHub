//this is the main router called by server
const express = require('express');
const router = express.Router();

//how to use controller from this file
const homeController = require('../controllers/home_controller');

console.log('router is loaded');

//response to users is given by this controller
router.get('/',homeController.home);

//user router is called
router.use('/users',require('./users')); //middleware which call users router

//post router is called
router.use('/posts',require('./posts')); //middleware which call posts router

module.exports = router;