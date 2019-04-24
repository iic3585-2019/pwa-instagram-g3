require('dotenv').config();

const user = require('../models/User');
const post = require('../models/Post');
const like = require('../models/Like');

module.exports = {
  DB: process.env.MONGODB_URI,
  User: user,
  Post: post,
  Like: like,
};
