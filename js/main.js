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
	.module('GamePage', ['satellizer', 'environment'])
	.config(function($authProvider, envServiceProvider) {

		envServiceProvider.config({
			domains: {
				development: ['localhost', 'dev.local', '127.0.0.1'],
				production: ['indieforger.com']
			},
			vars: {
				development: {
					facebookConfig: {
						clientId: '1163912896952827'
					}
				},
				production: {
					facebookConfig: {
						clientId: '1058804700796981' // todo: test on production
					}
				}
			}
		});

		envServiceProvider.check();
		$authProvider.facebook(envServiceProvider.read('facebookConfig'));
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
