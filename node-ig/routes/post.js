const express = require('express');

const router = express.Router();

const db = require('../helpers/db');

const { Post, Like } = db;

router.get('/:pid', (req, res) => {
  const post = Post.findById(req.params.pid);
  res.json(post);
});

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate({ path: 'user' });
    res.json(posts);
  } catch (e) {
    next(e);
  }
});

router.post('/', (req, res, next) => {
  if (!req.user) {
    res.status(400).json({ message: 'Must be logged in to Post' });
  } else {
    const { sub } = req.user;
    const post = new Post({ user: sub, ...req.body });
    post
      .save()
      .then(p => res.json(p))
      .catch(err => next(err));
  }
});

router.post('/:pid/like', (req, res, next) => {
  if (!req.user) {
    res.status(400).json({ message: 'Must be logged in to Post' });
  } else {
    const like = new Like(req.user, req.params.pid);
    like
      .save()
      .then(l => res.json(l))
      .catch(err => next(err));
  }
});

module.exports = router;
