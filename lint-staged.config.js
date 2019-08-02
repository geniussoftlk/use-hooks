module.exports = {
  '**/+(src|test)/**/*.js': ['prettier --write', 'eslint --fix', 'git add'],
};
