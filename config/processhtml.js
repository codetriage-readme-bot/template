module.exports = {  
  development: {
    cwd: 'template/html/',
    src: ['*.html'],
    dest: './assets',
    ext: ".php",
    expand: true
  },
  production: {
    cwd: 'template/html/',
    src: ['*.html'],
    dest: './assets',
    ext: ".php",
    expand: true
  }
};
