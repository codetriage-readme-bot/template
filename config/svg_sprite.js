module.exports = {
  basic: {
    expand: true,
    cwd: 'frontend/media/img/sprite/svg',
    src: ['**/*.svg'],
    dest: 'assets',
    options: {
      mode: {
        css: {
          render: {
            css: true
          }
        }
      }
    }
  }
}
