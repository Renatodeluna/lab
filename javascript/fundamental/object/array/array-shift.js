'use strict';

//  ==========================================================================
//  Array Push
//  ==========================================================================

	

	// Syntax
	arr.shift();


	// Simple
	var myList = ["angel", "home", "medical"];

	console.log("mylist before: " + mylist);

	var shifted = myList.shift();

	console.log("myList after: " + myList); 
	console.log("element remove:" + shifted);

	// return:
		// myList before: angel, home, medical
		// myList after: home, medical
		// Element remove: angel


	var data = [1, 2, 3, 4];

	console.log(data.shift());
	console.log(data); // return: 2, 3, 4