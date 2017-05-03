module.exports = {
  main: {
    expand: true,
    cwd: 'template/fonts/',
    src: '**',
    dest: 'assets/fonts',
  },
  
  video: {
    expand: true,
    cwd: 'template/media/video/',
    src: '**',
    dest: 'assets/video',
  }
};
