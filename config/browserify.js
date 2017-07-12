module.exports = {
  dist: {
    files: {
      'template/javascript/modules/vue.js':
        [
          'template/javascript/vue/main.js',
          'template/javascript/vue/**/*.coffee'
        ]
    },
    options: {
      transform: ['vueify']
    }
  }
};
