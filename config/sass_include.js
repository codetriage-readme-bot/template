module.exports = {
  styles: {
    options: {},
    files: {
      'template/css/sass/import/styles.sass': ['template/css/sass/import/**/*.+(sass|scss)', '!template/css/sass/import/styles.sass']
    },
  },
  medias: {
    src: ['template/css/sass/media/**/*.sass', '!template/css/sass/media/medias.sass'],
    dest: 'template/css/sass/media/medias.sass'
  }
};
