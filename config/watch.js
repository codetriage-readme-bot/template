module.exports = {
  watch: {
    files: [
      'frontend/*.html',
      'frontend/**/*/*.*',
      '!frontend/html/*.*'
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
      'copyto:stuff'
    ]
  }
}
