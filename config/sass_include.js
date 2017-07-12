module.exports = {
  styles: {
    options: {},
    files: {
      'template/styles/sass/import/styles.sass': [
        'template/styles/sass/import/**/*.+(sass|scss)',
        '!template/styles/sass/import/styles.sass'
      ]
    },
  },
  medias: {
    src: [
      'template/styles/sass/media/**/*.sass',
      '!template/styles/sass/media/medias.sass'
    ],
    dest: 'template/styles/sass/media/medias.sass'
  }
};
