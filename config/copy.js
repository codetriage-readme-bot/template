module.exports = {
  main: {
    expand: true,
    cwd: 'frontend/fonts/',
    src: '**',
    dest: 'assets/fonts'
  },

  video: {
    expand: true,
    cwd: 'frontend/media/video/',
    src: '**',
    dest: 'assets/video'
  }
}
