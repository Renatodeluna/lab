'use strict';

//  ==========================================================================
//  Date getMinutes
//  ==========================================================================

	

	// Syntax
	dateObj.getMinutes()


	// Simple 
	var d = new Date();
	var n = d.getMinutes();

	console.log(n);
	// return 30


	var Xmas95 = new Date('December 25, 1995 23:15:30');
	var minutes = Xmas95.getMinutes();

	console.log(minutes); 
	// return 15


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
	// return 02:33:06