'use strict';

//  ==========================================================================
//  Array CharAt
//  ==========================================================================

	

	// Syntax
	str.charAt(index);


	// Simple 
	var hi = "Hello Word!";

	console.log("Character at index 0 is " + hi.charAt(0));
	console.log("Character at index 1 is " + hi.charAt(1));
	console.log("Character at index 2 is " + hi.charAt(2));
	console.log("Character at index 3 is " + hi.charAt(3));
	console.log("Character at index 4 is " + hi.charAt(4));
	console.log("Character at index 5 is " + hi.charAt(5));
	console.log("Character at index 6 is " + hi.charAt(6));
	console.log("Character at index 7 is " + hi.charAt(7));
	console.log("Character at index 8 is " + hi.charAt(8));
	console.log("Character at index 9 is " + hi.charAt(9));
	console.log("Character at index 10 is " + hi.charAt(10));
	// return:
	// Character at index 0 is 	H
	// Character at index 1 is 	e
	// Character at index 2 is 	l
	// Character at index 3 is 	l
	// Character at index 4 is 	o
	// Character at index 5 is  
	// Character at index 6 is 	W
	// Character at index 7 is 	o
	// Character at index 8 is 	r
	// Character at index 9 is 	d
	// Character at index 10 is !


	// Length
	var hi = "Hello";
	console.log(hi.charAt(hi.length-1));
	//	return 'o';

	var number = "12345";
	var numb = number.charAt(number.length-1);
	console.log(numb);
	//	return '5'

