module.exports = {  
  compile: {
    options: {
      import: [
        'variables',
        'mixins',
        'import/**/*',
        'media/**/*'
      ]
    },
    files: {
      'assets/css/src/stylus.css' : 'template/styles/stylus/main.styl',
    }
  }
};
