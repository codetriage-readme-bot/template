module.exports = {
  build: {
    src: [
    // bower:js
    '../libs/jquery/dist/jquery.js',
    '../libs/bootstrap/dist/js/bootstrap.js',
    '../libs/slick-carousel/slick/slick.js',
    '../libs/jquery-ui/jquery-ui.js',
    '../libs/wow/dist/wow.js',
    // endbower
    'assets/js/build.js',
    ],
    dest: 'assets/js/build.min.js'
  },
};
