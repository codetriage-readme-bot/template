module.exports = {
  compile: {
    options: {
      data: {
        debug: false
      },
      
      pretty: {
        type: true
      },

      filters: {
        php: function (text, attrs, ast) {
          return '<?php ' + text + ' ?>';
        }
      }
    },

    files: {
      'template/html/index.html': ['template/html/index.pug']
    }
  }
};
