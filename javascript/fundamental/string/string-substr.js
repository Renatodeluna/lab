'use strict';

//  ==========================================================================
//  Array Substr
//  ==========================================================================

	

	// Syntax
	str.substr(start,[length]);


	// Simple 
	var hi = "Hello Word!";

	console.log(hi.substr(0,5));
	//	retorn 'Hello'
	console.log(hi.substr(6,5));
	//	return 'Word!'
	console.log(hi.substr(-5,5));
	//	return 'Word!'
	console.log(hi.substr(-10,4));
	//	return 'ello'
	console.log(hi.substr(11,1));
	//	return '!'


