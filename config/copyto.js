module.exports = {
  stuff: {
    files: [
      {cwd: 'template/img/additional/', src: ['**/*'], dest: 'assets/img/additional/', expand: true},
      {cwd: 'template/modules/', src: ['data.json'], dest: 'assets/js/', expand: true},
    ],
    options: {
      processContent: function(content, path) {
        return content;
      },
    }
  },

  libs: {
    files: [
      {cwd: 'libs/tether/dist/css/', src: ['tether.min.css'], dest: 'assets/css/', expand: true},
      {cwd: 'libs/bootstrap/dist/css/', src: ['bootstrap-grid.min.css'], dest: 'assets/css/', expand: true},

      {cwd: 'libs/datetimepicker/build/', src: ['jquery.datetimepicker.min.css'], dest: 'assets/css/', expand: true},

      {cwd: 'libs/jquery/dist/', src: ['jquery.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/tether/dist/js/', src: ['tether.min.js'], dest: 'assets/js/', expand: true},
      {cwd: 'libs/bootstrap/dist/js/', src: ['bootstrap.min.js'], dest: 'assets/js/', expand: true},

    ],
    options: {
      processContent: function(content, path) {
        return content;
      },
    }
  }
};