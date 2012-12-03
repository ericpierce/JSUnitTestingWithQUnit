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
			userNameArray = ['bubba','winthorp','cbertucci'];

		// Reset tip
		$tipIcon.removeClass( 'icon-ok' ).removeClass( 'icon-exclamation-sign' );
		$tipMessage.text( '' );

		// Verify user name is not blank before continuing. 
		if( $.trim( $userName.val() ) != '' ){

			// Check for user name			
			if( userNameArray.indexOf( $userName.val() ) === -1 ) {
				// user name available.
				tipIconClass = 'icon-ok';
				tipMessage = "This name is available.";
			} else {
				// user name not available
				tipIconClass = 'icon-exclamation-sign';
				tipMessage = "This name is not available.";
			}
			
			// Set tip icon / populate tip message
			$tipIcon.addClass( tipIconClass );
			$tipMessage.text( tipMessage );
		}
	}
	
	return {
		isUserNameAvailable 	: isUserNameAvailable
	};

}() );