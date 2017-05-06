var Vue = require('vue')
/*var hello = require('vue!./components/hello.vue')*/

/*new Vue({
    el: 'body',
    components: {
        hello: hello
    }
})
*/
new Vue({
  el: "#app",
  data: {
    numbers: [
      {
        name: 'one',
        status: false
      },
      {
        name: 'two',
        status: true
      },
      {
        name: 'tree',
        status: false
      },
    ]
  }
});
