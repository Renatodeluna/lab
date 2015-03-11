'use strict';

//  ==========================================================================
//  Date getHours
//  ==========================================================================

	

	// Syntax
	dateObj.getHours()


	// Simple
	var d = new Date("July 21, 1983 02:15:00");
	var n = d.getHours();

	console.log(n);
	// return 1


	var d = new Date();
	var n = d.getHours();

	console.log(n);
	// return 2



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
	// return 02:25:44


