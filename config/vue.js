module.exports = {
  options: {
    quoteChar: "'",
    htmlmin: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: false,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: false,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    },
    indentString: '  ',
    process: true
  },
// compile all found in src directory 
  task: {
    src: 'template/vue/',
    dest: 'template/javascript/modules/build_vue.js',
  }
};
