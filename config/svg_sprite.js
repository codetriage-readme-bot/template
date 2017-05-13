module.exports = {
  basic: {
    expand: true,
    cwd: 'template/media/img/sprite/svg',
    src: ['**/*.svg'],
    dest: 'assets/css',
    options       : {
      mode      : {
        view     : {
          render  : {
            css : true
          }
        }
      }
    }
  }
};
