module.exports = {
  development: {
    src: [
      'template/html/index.html'
    ],
    options: {
      devDependencies: true,
    }
  },
  production: {
    src: [
    /* if ignore some library files add "main":["*.css", "*.js"] >> libsPath/bower.json */
      'config/cssmin.js',
      'config/concat.js'
    ],
  }
};
