component {
	remote struct function checkUserNameAvailablility( required string nameToCheck ) 
		returnformat="JSON"
	{
		local.response = {
			'userNameAvailable' = false,
			'message' = ""
		};

		if( ! listFind( "bubba,winthorp,cbertucci", arguments.nameToCheck ) ){
			local.response.userNameAvailable = true;
			local.response.message = "This name is available.";
		} else {
			local.response.message = "This name is not available.";
		}

		return local.response;
	}
}
