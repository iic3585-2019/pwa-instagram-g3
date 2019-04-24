require('dotenv').config();
const expressJwt = require('express-jwt');

const userService = require('../controllers/user');

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  return done();
}

function jwt() {
  const secret = process.env.JWT_SECRET;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      '/api/users',
      '/api/users/register',
      '/api/users/authenticate',
    ],
  });
}

module.exports = jwt;
