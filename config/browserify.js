module.exports = {
  dist: {
    files: {
      'frontend/javascript/modules/vue.js':
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
