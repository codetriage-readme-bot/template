module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'config/',
      src: [
        'cssmin.js',
        'concat.js'
      ],
      dest: 'config/'
    }],
    options: {
      replacements: [{
        pattern: /([ \t]*)\..\/libs\/"*?/gi,
        replacement: 'libs\/'
      }]
    }
  }
};
