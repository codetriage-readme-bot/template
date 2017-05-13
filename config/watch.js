module.exports = {
  watch: {
    files: [
      'template/*.html', 
      'template/**/*/*.*', 
      '!template/html/*.*'
    ],
    tasks: [
      'pug', 
      'html-prettyprinter', 
      'processhtml:dev',
      'cssjoin',
      'less_imports', 
      'less', 
      'sass_include',
      'sass:dist', 
      'stylus',
      'browserify',
      'concat:dist', 
      'copyto:stuff',
    ],
  },
};
