test( "sum", function() {

	// Call 'sum' fn; store the result.
	var result = simple.sum( 1, 2 );

	// 'ok' assert
	ok( !isNaN( parseFloat( result ) ) && isFinite( result ), "The result should be numeric." );
	
	// 'equal' assert ( == )
	equal( simple.sum( 3, 4 ), "7", "The sum should be 7." );

	// 'deepEqual' assert ( === )
	deepEqual( simple.sum( 3, 4 ), 7, "The sum should be 7." );

});