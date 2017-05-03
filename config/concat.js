module.exports = {
  dist: {
    src: [
      'template/pages/src/js/main.js',
      'template/base/src/js/main.js', 
      'template/modules/src/js/main.js', 
    ],
    dest: 'assets/js/build.js'
  },
  libsJs: {
    src: [
      /* important sequence */
      'assets/js/jquery.min.js',
      'assets/js/jquery-ui.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/wow.min.js',
      'assets/js/slick.min.js',
      
      /* custom js */
      'assets/js/build.min.js'
    ],
    dest: 'assets/js/all.min.js'
  },
  libsCss: {
    src: [
      'assets/css/*.min.css'
    ],
    dest: 'assets/css/all.min.css'
  }
};
