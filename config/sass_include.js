module.exports = {
  styles: {
    options: {},
    files: {
      'frontend/styles/sass/import/styles.sass': [
        'frontend/styles/sass/import/**/*.+(sass|scss)',
        '!frontend/styles/sass/import/styles.sass'
      ]
    }
  },
  medias: {
    src: [
      'frontend/styles/sass/media/**/*.sass',
      '!frontend/styles/sass/media/medias.sass'
    ],
    dest: 'frontend/styles/sass/media/medias.sass'
  }
}
