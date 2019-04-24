function logErrors(err, req, res, next) {
  console.log('\x1b[41m', `err => ${err}`, '\x1b[0m');
  next(err);
}

module.exports = logErrors;
