'use strict';

//  ==========================================================================
//  Array Push
//  ==========================================================================

	

	// Syntax
	array.push(item1, item2, ..., itemN);


	// Simple
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Kiwi", "Lemon", "Pineapple");
	// result: [Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon", "Pineapple"];


	var count = ["José"];

	document.write("This array has" + count.length + "elements. <br>");
	count.push("Antônio");
	document.write("Now has" + count.length + "elements. <br>");
	count.push("Maria", "Carlos");
	document.write("This array has" + count.length + "elements. <br>");
	document.write("Which are: " + count.join(", "));


	var esports = ["futebol", "beisebol"];
	var total   = esports.push("handebol", "natacao");

	console.log(esports); // ["fubebol", "beisebol", "handebol", "natacao"]
	console.log(total); // 4

	