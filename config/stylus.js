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
      'assets/css/src/stylus.css': 'frontend/styles/stylus/main.styl'
    }
  }
}
