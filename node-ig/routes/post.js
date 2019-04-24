const express = require('express');

const router = express.Router();

const db = require('../helpers/db');

const { Post, Like } = db;

router.get('/posts/:pid', (req, res) => {
  const post = Post.findById(req.params.pid);
  res.json(post);
});

router.get('/posts', (req, res, next) => {
  Post.find({})
    .then(p => res.json(p))
    .catch(err => next(err));
});

router.post('/posts', (req, res, next) => {
  if (!req.user) {
    res.status(400).json({ message: 'Must be logged in to Post' });
  } else {
    const post = new Post(req.user, req.body);
    post
      .save()
      .then(p => res.json(p))
      .catch(err => next(err));
  }
});

router.post('/posts/:pid/like', (req, res, next) => {
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
