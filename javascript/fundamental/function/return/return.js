'use strict';

//  ==========================================================================
//  Return
//  ==========================================================================


	// Syntax
	return [[expression]];


	// Simple return
	function xpto(x) {	 // Ex: x = 1
		return x + x;			 // 2
	}
	

	// Interrupt a function
	function counter() {

		for (var count = 1; ; count++) {	// Loop infinite
			
			console.log(count + "A"); 

			if (count === 5) {
				return;
			}

			console.log(count + "B");

		}

		console.log(count + "C");	// never appears

	}

	counter();
	// Output:
		// 1A
		// 1B
		// 2A
		// 2B
		// 3A
		// 3B
		// 4A
		// 4B
		// 5A


	// Returning a function
	function magic(x) {

		return function calc(x) {
			return x * 30;
		}

	}

	var answer = magic();
	answer(2015); // 84630


	function doWork() {

		return function calculate(y) {
			return y + 1;
		}

	}

	var func = doWork();
	var x = func(6);
	document.write(x); // 7

