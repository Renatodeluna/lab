'use strict';

//  ==========================================================================
//  Array Unshift
//  ==========================================================================

	

	// Syntax
	arr.unshift([element1], ...[elementN]);


	// Simple
	var arr = [1, 2];
	arr.unshift(0); // result of call is 3, the new array length
	// arr is [0, 1, 2]
	arr.unshift(-2, -1); // = 5
	// arr is [-2, -1, 0, 1, 2]
	arr.unshift([-3]);
	// arr is [[-3], -2, -1, 0, 1, 2]


	var data = [ "X" ];

	data.unshift( "A" );
	data.unshift( "B", "C" );

	console.log( data ); 
	// return ['B','C','A','X']


	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.unshift("Lemon","Pineapple");
	// return Lemon,Pineapple,Banana,Orange,Apple,Mango


	var arr = [];

	arr.unshift(10, 11);
	arr.unshift(12, 13, 14);
	
	document.write(arr.toString());
	// return: 12,13,14,10,11