//this router is called by index.js router  (main router)
const express = require('express');
//how to use express router
const router = express.Router();
//authentication for signed in user
const passport = require('passport');

const postController = require('../controllers/post_controller');

router.post('/create',postController.create);

module.exports = router;
