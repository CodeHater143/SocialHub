//this router is called by index.js router  (main router)
const express = require('express');
//how to use express router
const router = express.Router();

const likesController = require('../controllers/like_controller');

router.post('/toggle',likesController.toggleLike);
module.exports = router;