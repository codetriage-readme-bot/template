module.exports = {
  stuff: {
    files: [
      {cwd: 'template/media/img/additional/', src: ['**/*'], dest: 'assets/img/additional/', expand: true},
      {cwd: 'template/media/', src: ['data.json'], dest: 'assets/js/', expand: true},
      {cwd: 'template/css/css', src: ['all.css'], dest: 'assets/css/src/', expand: true},
    ],
    options: {
      processContent: function(content, path) {
        return content;
      },
    }
  },

  libs: {
    files: [
      {cwd: 'libs/bootstrap/dist/css/', src: ['bootstrap.min.css'], dest: 'assets/css/', expand: true},
      {cwd: 'libs/jquery-ui/themes/humanity/', src: ['jquery-ui.min.css'], dest: 'assets/css/', expand: true},
      {cwd: 'libs/animate.css/', src: ['animate.min.css'], dest: 'assets/css/', expand: true},
      /* If css in library need to minificated */
      {cwd: 'libs/slick-carousel/slick/', src: ['slick.css'], dest: 'assets/css/src/libs/', expand: true},

      {cwd: 'libs/jquery/dist/', src: ['jquery.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/jquery-ui/', src: ['jquery-ui.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/bootstrap/dist/js/', src: ['bootstrap.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/wow/dist/', src: ['wow.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/slick-carousel/slick/', src: ['slick.min.js'], dest: 'assets/js/', expand: true},
    ],
    options: {
      processContent: function(content, path) {
        return content;
      },
    }
  }
};
