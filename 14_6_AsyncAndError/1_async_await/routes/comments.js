//this router is called by index.js router  (main router)
const express = require('express');
//how to use express router
const router = express.Router();
//authentication for signed in user
const passport = require('passport');

const commentController = require('../controllers/comment_controller');

router.post('/create',passport.checkAuthentication,commentController.create);

router.get('/destroy/:id',passport.checkAuthentication,commentController.destroy);

module.exports = router;
