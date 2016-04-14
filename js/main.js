jQuery(function($) {'use strict',
	new WOW().init();

	$('.gallery a').lightbox();

	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});
});