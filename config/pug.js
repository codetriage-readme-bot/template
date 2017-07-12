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
    files: [
      {
        src: "frontend/html/*.pug",
        dest: "./",
        expand: true,
        ext: ".html"
      } 
    ]
  }
};
