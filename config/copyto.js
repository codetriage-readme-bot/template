module.exports = {
  stuff: {
    files: [
      {cwd: 'template/media/img/additional/', src: ['**/*'], dest: 'assets/img/additional/', expand: true},
      {cwd: 'template/media/', src: ['data.json'], dest: 'assets/', expand: true},
      {cwd: 'template/styles/css', src: ['all.css'], dest: 'assets/css/src/', expand: true},
    ],
    options: {
      processContent: function(content, path) {
        return content;
      },
    }
  },
};
