module.exports = {
  stuff: {
    files: [
      {
        cwd: 'frontend/media/img/additional/',
        src: ['**/*'],
        dest: 'assets/img/additional/',
        expand: true
      },
      {
        cwd: 'frontend/media/',
        src: ['data.json'],
        dest: 'assets/',
        expand: true},
      {
        cwd: 'frontend/styles/css',
        src: ['all.css'],
        dest: 'assets/css/src/',
        expand: true}
    ],
    options: {
      processContent: function (content, path) {
        return content
      }
    }
  }
}
