module.exports = {  
  compile: {
    options: {
      import: [      //  @import 'foo', 'bar/moo', etc. into every .styl file 
        'variables',       //  that is compiled. These might be findable based on values you gave 
        'mixins',       //  that is compiled. These might be findable based on values you gave 
        'import/**/*',       //  that is compiled. These might be findable based on values you gave 
        'media/**/*'    //  to `paths`, or a plugin you added under `use` 
      ]
    },
    files: {
      'assets/css/src/stylus.css' : 'template/styles/stylus/main.styl', // 1:1 compile 
    }
  }
};
