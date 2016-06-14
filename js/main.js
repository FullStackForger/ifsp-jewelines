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

angular
	.module('GamePage', ['satellizer'])
	.config(function($authProvider) {
		$authProvider.facebook({
			clientId: '1163912896952827'
		});
	})
	.controller('LoginCtrl', function($scope, $auth) {
		var expanded = false;
		var open = true;

		$scope.authenticate = function(provider) {
			$auth.authenticate(provider);
		};

		$scope.isExpanded = function() {
			return expanded;
		};

		$scope.isOpen = function() {
			return open;
		};

		$scope.toggle = function(expand) {
			expanded = expand === true ? true : false;
		};

		$scope.close = function() {
			console.log('close');
			open = false;
		};
	});
