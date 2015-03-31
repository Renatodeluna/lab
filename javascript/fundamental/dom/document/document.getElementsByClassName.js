'use strict';


//  ==========================================================================
//  Document getElementsByClassName
//  ==========================================================================

	
	// Syntax
	document.getElementsByClassName(names);	// returns an array of elements

	

	// Functions
	function color(colorName) {

		var color = document.getElementsByClassName('xpto');
		color[0].style.color = colorName;

	}
	
	color('red');



	// Length	
	var element = document.getElementsByClassName('xpto');	// returns the length
	console.log(element.length);

