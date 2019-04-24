/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../helpers/db');

const { User } = db;

async function authenticate({ email, password }) {
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
    return {
      ...userWithoutHash,
      token,
    };
  }
  const res = 'Wrong password or email';
  throw res;
}

async function create(userParam) {
  // validate
  if (await User.findOne({ email: userParam.email })) {
    const error = `Email ${userParam.email} is already taken`;
    throw error;
  }

  const user = new User(userParam);

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // save user
  try {
    await user.save();
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
    return {
      ...userWithoutHash,
      token,
    };
  } catch (e) {
    const res = `Something went wrong: ${e}`;
    throw res;
  }
}

async function getById(id) {
  const user = await User.findById(id).select('-hash');
  return user;
}

module.exports = {
  authenticate,
  create,
  getById,
};
