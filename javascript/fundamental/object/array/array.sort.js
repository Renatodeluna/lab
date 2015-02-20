'use strict';

//  ==========================================================================
//  Array Sort
//  ==========================================================================

	

	// Syntax
	arr.sort([compareFunction]);


	// Simple 
	var fruit = ["andre", "luiz", "maria", "pedro", "felipe"];
	fruit.sort();
	// return ["andre", "felipe", "luiz", "maria", "pedro"]

	var score = [4, 2, 1, 5, 3];
	score.sort();
	// return [1, 2, 3, 4, 5]


	// How to order a numeric array

		// The compare function has the following form:
		function (a,b) {
			if (a is less than b by some ordering criterion) {
				return -1;
			}

			if (a is greater than b by the ordering criterion) {
				return 1;
			}

			// a must be equal to b
			return 0;
		}

		// Sorting by increasing
		function compareNumbers01() {
			return a - b;
		}

		// Sorting by decreasing
		function compareNumbers02() {
			return a + b;
		}

		// Ex: 
		var arr = [3, 7, 20, 0, 67, 209];
		arr.sort(compareNumbers01);
		// return [0, 3, 7, 20, 67, 209]
		arr.sort(compareNumbers02);
		// return [209, 67, 0, 20, 7, 3]


		var numbers = [4, 2, 5, 1, 3];
		numbers.sort(function(a,b) {
			return a - b;
		});

		console.log(numbers);
		// return [1, 2, 3, 4, 5]

