var user = user || ( function(){

	// Event handlers
	$(function(){
		$( '#userName' ).blur( isUserNameAvailable );
	});

	function isUserNameAvailable(){
		var $userName = $( '#userName' ),
			$tipIcon = $userName.siblings( '.tipIcon' ),
			$tipMessage = $userName.siblings( '.tipMessage' ),
			tipIconClass = '',
			tipMessage = '',
			userServiceArgs;

		// Reset tip
		$tipIcon.removeClass( 'icon-ok' ).removeClass( 'icon-exclamation-sign' );
		$tipMessage.text( '' );

		// Verify user name is not blank before continuing. 
		if( $.trim( $userName.val() ) != '' ){
			userServiceArgs = {	
				"nameToCheck"	: $userName.val() 
			};

			// Call user service to check for user name availability.
			$.getJSON( '../remote/userService.cfc?method=checkUserNameAvailablility', 
				userServiceArgs,
				function( response ){ 

					// Set tip icon appropriately.
					if( response.userNameAvailable ){
						$tipIcon.addClass( 'icon-ok' );
					} else {
						$tipIcon.addClass( 'icon-exclamation-sign' );
					}

					// Populate tip message
					$tipMessage.text( response.message );	
				}
			);
		}
	}

	return {
		isUserNameAvailable 	: isUserNameAvailable
	};

}() );
