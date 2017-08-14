module.exports = {
  dist: {
    src: [
      'frontend/javascript/pages/*.js',
      'frontend/javascript/base/*.js',
      'frontend/javascript/modules/*.js'
    ],
    dest: 'assets/js/build.js'
  },
  libsJs: {
    src: [
      // bower:js
      'libs/jquery/dist/jquery.js',
      'libs/bootstrap/dist/js/bootstrap.js',
      'libs/slick-carousel/slick/slick.js',
      'libs/jquery-ui/jquery-ui.js',
      'libs/wow/dist/wow.js',
      'libs/moment/moment.js',
      // endbower
    ],
    dest: 'assets/js/libs.js'
  },
  libsCss: {
    src: [
      'assets/css/*.min.css'
    ],
    dest: 'assets/css/all.min.css'
  },
  allJs: {
    src: [
      'assets/js/libs.min.js',
      'assets/js/build.min.js'
    ],
    dest: 'assets/js/all.min.js'
  }
}
