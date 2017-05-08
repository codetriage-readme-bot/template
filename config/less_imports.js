module.exports = {
  options: {
    banner: '// Compiled stylesheet'
  },
  styles: {
    src: ['template/css/less/**/*.less', '!template/css/less/main.less'],
    dest: 'template/css/less/main.less'
  }
};
