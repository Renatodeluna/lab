'use strict';


//  ==========================================================================
//  Attribute Node
//  ==========================================================================

	
	// Syntax
	var attrNode = element.getAttributeNode(attrName);


	// Simple
	var elemt = document.getElementsByTagName('h1')[0];
	var attr = elemt.getAttribueNode('class').value;

	console.log(attr);
	//	return ex: demoClass


	var elemt = document.getElementById('myAnchor');
	var attr = elemt.getAttributeNode('target').value;

	console.log(attr);
	// return _blank


