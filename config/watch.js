module.exports = {
  watch: {
    files: [
      'template/*.html', 
      'template/**/*/*.*', 
      '!template/html/*.*'
    ],
    tasks: [
      'pug', 
      'html-prettyprinter-dir', 
      'wiredep:development',
      'processhtml:development',
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
