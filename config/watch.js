module.exports = {
  watch: {
    files: [
      'template/*.html', 
      'template/**/*/*.*', 
      '!template/html/*.*'
    ],
    tasks: [
      'sass_include',
      'sass:dist', 
      'less_imports', 
      'less', 
      'browserify',
      'concat:dist', 
      'pug', 
      'html-prettyprinter', 
      'processhtml:dev',
      'copyto:stuff',
    ],
  },
};
