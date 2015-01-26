'use strict';


//  ==========================================================================
//  Document getElementById
//  ==========================================================================

	
	// Syntax
	document.getElementById(elementID);

	

	// Variables
	var foo = document.getElementById('demo');	//	Get the element with id='demo'
	foo.style.color = 'red';					//	Change the color of the element



	// Functions
	function background(color) {

		var background = document.getElementById('xpto');
		background.style.background = color;

	}
	
	background('blue');
