module.exports = {
  options: {
    banner: '// Compiled stylesheet'
  },
  styles: {
    src: ['template/styles/less/import/**/*.less', '!template/styles/less/import/styles.less'],
    dest: 'template/styles/less/import/styles.less'
  },
  medias: {
    src: ['template/styles/less/media/**/*.less', '!template/styles/less/media/medias.less'],
    dest: 'template/styles/less/media/medias.less'
  }
};
