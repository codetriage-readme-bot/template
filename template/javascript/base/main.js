$(document).ready(function(){

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
