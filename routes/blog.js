const express = require('express');

const router = express.Router();
const {createComment} = require('../controller/CommentController');
const {createPost,getAllPost} = require('../controller/PostController');

const {createLike,unlikePost} = require('../controller/LikeController');
//const {allPosts} = require('../controller/PostController');
//Import controller
router.post('/comments/create',createComment);
router.post('/posts/create',createPost);
router.get('/posts',getAllPost);
router.post('/likes/like',createLike);
router.post('/likes/unlike',unlikePost);


//Map controller



//export 
module.exports = router;