module.exports = {
  include: {
    options: {},
    files: {
      'template/styles/css/all.css': [
        'frontend/styles/css/**/*.css',
        '!frontend/styles/css/all.css'
      ]
    },
  }
};
