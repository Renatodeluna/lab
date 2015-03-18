'use strict';


//  ==========================================================================
//  Document createTextNode
//  ==========================================================================

	
	// Syntax
	document.createTextNode(text);


	// Simple 
	var headers = document.createElement('H1');
	var text    = document.createTextNode('Hello World');
	
	console.log(headers.appendChild(text));
	// return Hello World


var paragrafo = document.createElement('P');
var text      = document.createTextNode('This is a paragraph');

console.log(paragrafo.appendChild(text)); 
// return This is a paragraph

