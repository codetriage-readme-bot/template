module.exports = {
  watch: {
    files: [
      'template/*.html', 
      'template/**/*/*.*', 
      '!template/html/*.*'
    ],
    tasks: [
      'cssjoin',
      'less_imports', 
      'less', 
      'sass_include',
      'sass:dist', 
      'browserify',
      'concat:dist', 
      'pug', 
      'html-prettyprinter', 
      'processhtml:dev',
      'copyto:stuff',
    ],
  },
};
