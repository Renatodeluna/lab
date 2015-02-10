'use strict';

//  ==========================================================================
//  Array
//  ==========================================================================

	

	// Syntax
	var foo = new Array(element0, element1, ..., elementN); // new Array();
  var foo = Array(element0, element1, ..., elementN); // Array();
	var foo = [element0, element1, ..., elementN]; // [];


	// Simple
	var xpto = ["Sunday", "Monday", "Tuesday", "Wednesday"];
	// or
	var xpto = [
		"Sunday", 
		"Monday", 
		"Tuesday", 
		"Wednesday"
	];
	// or
	var xpto = [];

	xpto[0] = "Sunday"; 
	xpto[1] = "Monday"; 
	xpto[2] = "Tuesday"; 
	xpto[2] = "Wednesday";


	// function
	function day() {

		var xpto = ["Sunday", "Monday", "Tuesday", "Wednesday"];
		console.log(xpto[2]);

	}
	day();	// return Tuesday


	var xpto = ["Sunday", "Monday", "Tuesday", "Wednesday"];
	document.getElementById("foo").innerHTML = xpto[0]; // return Sunday


	// Elements
	var arr = ['this is the first element', 'this is the second element'];
	console.log(arr[0]); // return: 'this is the first element'
	console.log(arr[1]); // return: 'this is the second element'


	// Object
	var foo = {
	  'var'  : 'text',
	  'array': [1, 2, 3, 4]
	};

	console.log(foo['array']); // return [1, 2, 3, 4]


