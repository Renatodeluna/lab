'use strict';

//  ==========================================================================
//  Date getSeconds
//  ==========================================================================

	

	// Syntax
	dateObj.getSeconds()


	// Simple 
	var d = new Date();
	var n = d.getSeconds();

	console.log(n);
	// return 47


	var Xmas95 = new Date('December 25, 1995 23:15:30');
	var seconds = Xmas95.getSeconds();

	console.log(seconds);
	// return 30


	// Function
	function addZero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	function myHours() {

		var d = new Date();
		var h = addZero(d.getHours());
		var m = addZero(d.getMinutes());
		var s = addZero(d.getSeconds());

		console.log(h + ":" + m + ":" + s);

	}

	myHours();
	// return 02:37:23
