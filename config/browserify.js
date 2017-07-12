module.exports = {
  dist: {
    files: {
      'template/javascript/modules/vue.js':
        [
          'frontend/javascript/vue/main.js',
          'frontend/javascript/vue/**/*.coffee'
        ]
    },
    options: {
      transform: ['vueify']
    }
  }
};
