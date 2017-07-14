module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'frontend/media/img',
      src: [
        '**/*.{png,jpg,gif}',
        '!sprite/**/*'
      ],
      dest: 'assets/img/'
    }]
  }
};
