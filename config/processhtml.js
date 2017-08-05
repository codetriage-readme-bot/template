module.exports = {
  development: {
    cwd: 'frontend/html/',
    src: ['*.html'],
    dest: './assets',
    ext: '.php',
    expand: true
  },
  production: {
    cwd: 'frontend/html/',
    src: ['*.html'],
    dest: './assets',
    ext: '.php',
    expand: true
  }
}
