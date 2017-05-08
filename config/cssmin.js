module.exports = {
  banner: {
    options: {
      banner: '/* My minified CSS */'
    },
    files: {
      'assets/css/main.min.css' : ['assets/css/src/*.css', 'assets/css/fonts/fonts.css']
    }
  },
  /* if necessary */
  libs: {
    files: {
      'assets/css/libs.min.css' : ['assets/css/libs/*.css']
    }
  }
}
