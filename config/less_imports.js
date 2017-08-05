module.exports = {
  options: {
    banner: '// Compiled stylesheet'
  },
  styles: {
    src: [
      'frontend/styles/less/import/**/*.less',
      '!frontend/styles/less/import/styles.less'
    ],
    dest: 'frontend/styles/less/import/styles.less'
  },
  medias: {
    src: [
      'frontend/styles/less/media/**/*.less',
      '!frontend/styles/less/media/medias.less'
    ],
    dest: 'frontend/styles/less/media/medias.less'
  }
}
