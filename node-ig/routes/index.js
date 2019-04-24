const express = require('express');

const router = express.Router();

const userRoutes = require('./user');
const postRoutes = require('./post');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
