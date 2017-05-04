var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

/* correct pre-load images */
$(function () {
  $('img[data-src]').each(function () {
    var image = $(this);

    image.attr({
      src: image.data('src')
    }).removeAttr('data-src');

    if (!image.get(0).complete) {
      image.parent().addClass('loading');
      image.bind('load', function () {
        $(this).unbind('load').parent().removeClass('loading');
      });
    }
  });
});

$(document).ready(function(){
    new WOW().init();

    $.getJSON('assets/data.json', {_: new Date().getTime()}, function(dataJs) {
        /* use content from json file */
    });

    if(isMobile.any()){
        console.log('mobile');
    }


    if (document.body.clientWidth <= '992'){
        console.log('992px');
    }

/* Ajax */

    $("#form-proposal").submit(function() {
        var form = $(this);
        var error = false;
        var email = $(form).serializeArray()[0].value;
        var password = $(form).serializeArray()[1].value;

        form.find('input').each( function(){
            if ($(this).val() == '') {
                $('.alert').remove();
                $(form).prepend("<div class='alert alert-warning'></div>");
                $('.alert-warning').prepend('"'+$(this).attr('placeholder')+'" !');
                error = true;
            }
        });
        /* ajax if No error */
        if (!error) {
            $.ajax({
                type: "POST",
                url: "http://192.168.1.34:5000/api/v1/tokens",
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                /*data: $(this).serialize(),*/
                data: '{"auth": {"email": "'+email+'", "password": "'+password+'"}}',
            }).done(function(data) {
                if (data['error']) { // if php script get error on server side
                    $('.alert').remove();
                    $(form).prepend("<div class='alert alert-danger'></div>");
                    $('.alert-danger').prepend('"'+data['error']+'" !'); // show error from placeholder
                } else { // if no error from server side
                    $('.alert').remove();
                    $(form).prepend("<div class='alert alert-success'></div>");
                    $('.alert-success').prepend(JSON.stringify(data));
                }
                /* if spicify error from server */
            }).fail(function(xhr, thrownError) {
                $('.alert').remove();
                $(form).prepend("<div class='alert alert-danger'></div>");
                $('.alert-danger').prepend('SERVER ERROR: '+xhr.status +'  '+ thrownError);
            });
        }
        return false;
    });
});

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

/* video slider autoplay */

/*
var video = $('#main-slider .slick-active').find('video').get(0).play();

$('#main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#main-slider .slick-slide').find('video').get(0).pause();
    var video = $('#main-slider .slick-active').find('video').get(0).play();
});
*/
