'use strict';

//  ==========================================================================
//  Array length
//  ==========================================================================

	

	// Syntax
	array.length;


	// Simple
	var fruits = ["apple", "orange", "lemon", "banana"];
	console.log(fruits.length); // return 4


	// Elements 
	var fruits = ["apple", "orange", "lemon", "banana"];
	fruits[fruits.length] = "mango"; // add new element: 'mango'


	// Looping
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var text = "<ul>";
  
  for (i = 0; i < fruits.length; i++) {
      text += "<li>" + fruits[i] + "</li>";
  };

  text += "</ul>";
  document.getElementById("xpto").innerHTML = text;
  // return: 
  // <ul>
  // 	<li>Banana</li>
  // 	<li>Orange</li>
  // 	<li>Apple</li>
  // 	<li>Mango</li>
  // </ul>


  var numbers = [1, 2, 3, 4, 5];

	for (var i = 0; i < numbers.length; i++) {
	  numbers[i] *= 2;
	}	
	console.log(numbers); // return [2, 4, 6, 8, 10]


  // Associative
  var person = []

	person[0] = "Renato";
	person[1] = "de";
	person[2] = "Luna";

	var x = person.length; // return 3
	var y = person[0];     // return "Renato"


