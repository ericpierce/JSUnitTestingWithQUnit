(function (){
	module( 'isUserNameAvailable (no mock)' );

	test( 'blank user name', function() {
		// Get hooks on DOM elements in qunit-fixture
		var $userName = $( '#userName' ),
			$tipIcon = $userName.siblings( '.tipIcon' ),
			$tipMessage = $userName.siblings( '.tipMessage' );

		// Make sure user name is blank
		$userName.val( '' );
		user.isUserNameAvailable();

		// Asserts
		ok( ! $tipIcon.hasClass( 'icon-ok' ), "The tip icon should not be 'ok' icon." );
		ok( ! $tipIcon.hasClass( 'icon-exclamation-sign' ), "The tip icon should not be '!' icon." );
	});

	module( 'isUserNameAvailable (mock)', {
		setup: function () {
			$.mockjax({
				url 			: /userService\.cfc\?method=checkUserNameAvailablility/,
				contentType		: "text/json",
				responseTime	: 0,
				responseText	: { userNameAvailable : false, message : "Mocked message!" }
			});
		},
		teardown: function () {
			$.mockjaxClear();
		}
	});

	asyncTest( 'User name not available', function() {
		expect( 2 );
		var $userName = $( '#userName' ),
			$tipIcon = $userName.siblings( '.tipIcon' ),
			$tipMessage = $userName.siblings( '.tipMessage' );

		// Need to set user name to something.
		$userName.val( 'unittest' );
		user.isUserNameAvailable();

		setTimeout( function() {
			// Asserts		
			start();
			ok( $tipIcon.hasClass( 'icon-exclamation-sign' ), "The tip icon should be the '!' icon." );
			deepEqual( $tipMessage.text(), 'Mocked message!', "Message should contain mocked message." );
		}, 1000);

	});

	module( 'isUserNameAvailable (mock)', {
		setup: function () {
			$.mockjax({
				url 			: /userService\.cfc\?method=checkUserNameAvailablility/,
				contentType		: "text/json",
				responseTime	: 0,
				responseText	: { userNameAvailable : true, message : "Mocked message!" }
			});
		},
		teardown: function () {
			$.mockjaxClear();
		}
	});

	asyncTest( 'User name available', function() {
		expect( 2 );
		var $userName = $( '#userName' ),
			$tipIcon = $userName.siblings( '.tipIcon' ),
			$tipMessage = $userName.siblings( '.tipMessage' );

		// Need to set user name to something.
		$userName.val( 'unittest' );
		user.isUserNameAvailable();

		setTimeout( function() {
			// Asserts		
			start();
			ok( $tipIcon.hasClass( 'icon-ok' ), "The tip icon should be the 'ok' icon." );
			deepEqual( $tipMessage.text(), 'Mocked message!', "Message should contain mocked message." );
		}, 1000);

	});

}());
