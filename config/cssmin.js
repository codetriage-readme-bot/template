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
  libs: {
    files: {
      'assets/css/libs.min.css' : [
        // bower:css
        "libs/slick-carousel/slick/slick.css",
        "libs/animate.css/animate.css",
        // endbower
      ]
    }
  }
}
