module.exports = {
  development: {
    src: [
      'index.php'
    ],
    options: {
      devDependencies: true,
    }
  },
  production: {
    src: [
      'config/cssmin.js',
      'config/uglify.js'
    ],
  }
};
