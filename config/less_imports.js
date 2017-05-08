module.exports = {
  options: {
    banner: '// Compiled stylesheet'
  },
  styles: {
    src: ['template/css/less/import/**/*.less', '!template/css/less/import/styles.less'],
    dest: 'template/css/less/import/styles.less'
  },
  medias: {
    src: ['template/css/less/media/**/*.less', '!template/css/less/media/medias.less'],
    dest: 'template/css/less/media/medias.less'
  }
};
