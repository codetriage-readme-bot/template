module.exports = {
  banner: {
    options: {
      banner: '/* My minified CSS */'
    },
    files: {
      'assets/css/main.min.css' : [
        'assets/css/src/*.css', 
        'assets/fonts/fonts.css', 
        'assets/css/sprites_png.css', 
        'assets/css/sprite.css'
      ]
    }
  },
  /* if necessary */
  libs: {
    files: {
      'assets/css/libs.min.css' : ['assets/css/src/libs/*.css']
    }
  }
}
