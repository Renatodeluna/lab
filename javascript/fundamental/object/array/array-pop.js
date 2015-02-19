'use strict';

//  ==========================================================================
//  Array Pop
//  ==========================================================================

	

	// Syntax
	arr.pop();


	// Simple 
	var arr = [];
	arr.pop()
	// return undefined


	var myFruts = ['apple', 'lemon', 'orange', 'strawberry'];
	console.log(myFruts); 
	// return ['apple', 'lemon', 'orange', 'strawberry']

	var myFrutsPop = myFruts.pop();
	console.log(myFruts); 
	// return ['apple', 'lemon', 'orange']

	console.log(myFrutsPop); 
	// return strawberry


	// Loop
	var number;
	var my_array = new Array();

	my_array.push (5, 6, 7);
	my_array.push (8, 9);
	// my_array = 5, 6, 7, 8, 9

	number = my_array.pop();
	// number = 9

	while (number != undefined) {
	  console.log('number while: ' + number + " ");
	  number = my_array.pop();
	}
	// return:
	// number while: 9
	// number while: 8 
	// number while: 7
	// number while: 6
	// number while: 5

