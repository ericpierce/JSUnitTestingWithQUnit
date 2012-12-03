(function (){
	
	module( 'isUserNameAvailable', {
		setup: function () {
			// Get hooks on DOM elements in qunit-fixture
			$userName = $( '#userName' );
			$tipIcon = $userName.siblings( '.tipIcon' );
			$tipMessage = $userName.siblings( '.tipMessage' );
		},
		teardown: function () {
		}
	});
	
	test( 'Blank user name', function() {
		// Make sure user name is blank
		$userName.val( '' );
		user.isUserNameAvailable();

		// Asserts		
		ok( ! $tipIcon.hasClass( 'icon-ok' ), "The tip icon should not be 'ok' icon." );
		ok( ! $tipIcon.hasClass( 'icon-exclamation-sign' ), "The tip icon should not be '!' icon." );
	});

	test( 'User name not available', function() {
		console.log( $('#qunit-fixture').html() );

		// Unavailable user name
		$userName.val( 'bubba' );
		user.isUserNameAvailable();

		// Asserts		
		ok( $tipIcon.hasClass( 'icon-exclamation-sign' ), "The tip icon should be the '!' icon." );
		deepEqual( $tipMessage.text(), 'This name is not available.' );

		console.log( $('#qunit-fixture').html() );
	});
	
	test( 'User name available', function() {
		console.log( $('#qunit-fixture').html() );

		// Unavailable user name
		$userName.val( 'nowaythisusernamewouldeverexist' );
		user.isUserNameAvailable();

		// Asserts		
		ok( $tipIcon.hasClass( 'icon-ok' ), "The tip icon should be the 'ok' icon." );
		deepEqual( $tipMessage.text(), 'This name is available.' );

		console.log( $('#qunit-fixture').html() );
	});


}());