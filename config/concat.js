module.exports = {
  dist: {
    src: [
      'template/javascript/pages/*.js',
      'template/javascript/base/*.js', 
      'template/javascript/modules/*.js', 
    ],
    dest: 'assets/js/build.js'
  },
  libsJs: {
    src: [
      'assets/js/jquery.min.js',
      'assets/js/jquery-ui.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/wow.min.js',
      'assets/js/slick.min.js',
      'assets/js/build.min.js'
    ],
    dest: 'assets/js/all.min.js'
  },
  libsCss: {
    src: [
      'assets/css/*.min.css',
    ],
    dest: 'assets/css/all.min.css'
  }
};
