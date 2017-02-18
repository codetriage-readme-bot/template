module.exports = {
  dist: {
    src: [
      'template/base/src/js/main.js', 
      'template/modules/src/js/main.js', 
      'template/pages/src/js/main.js',
    ],
    dest: 'assets/js/build.js'
  },
  libsJs: {
    src: [
      /* important sequence */
      'assets/js/jquery.min.js',
      'assets/js/tether.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/jquery.datetimepicker.full.min.js',

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