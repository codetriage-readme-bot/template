/* video slider autoplay */

/*
var video = $('#main-slider .slick-active').find('video').get(0).play();

$('#main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#main-slider .slick-slide').find('video').get(0).pause();
    var video = $('#main-slider .slick-active').find('video').get(0).play();
});
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
