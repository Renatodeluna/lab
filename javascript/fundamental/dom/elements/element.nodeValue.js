'use strict';


//  ==========================================================================
//  Element nodeValue
//  ==========================================================================

	
	// Syntax
	node.nodeValue


	// Simple 
	var xpto = document.getElementsByTagName('button')[0].childNodes[0].nodeValue;
	
	console.log(xpto);
	// return the text inner of the tag


	var x = document.getElementById('myParagraf');
	var elemt = x.childNodes[0].nodeValue;

	console.log(elemt);
	// return text of the paragraf