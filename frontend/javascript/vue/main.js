var Vue = require('vue')
var hello = require('./components/hello.vue')

new Vue({
  el: 'h2',
  render: function(createElement) {
    return createElement(hello)
  }
})
