'use strict';


//  ==========================================================================
//  Document createTextNode
//  ==========================================================================

	
	// Syntax
	document.createTextNode(data);


	// Simple 
	var headers = document.createElement('H1');
	var text    = document.createTextNode('Hello World');
	
	console.log(headers.appendChild(text));
	// return Hello World 

	