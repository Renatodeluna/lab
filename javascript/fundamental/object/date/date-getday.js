'use strict';

//  ==========================================================================
//  Date getDay
//  ==========================================================================

	

	// Syntax
	//dateObj.getDay()


	// Simple
	var Xmas95 = new Date('December 25, 1995 23:15:30');
	var weekday = Xmas95.getDay();

	console.log(weekday);
	// return 1


	var d = new Date();
	var n = d.getDay();

	console.log(n);
	// return 3


	var d = new Date();
	var weekday = new Array();

	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var n = weekday[d.getDay()];

	console.log(n);
	// return Wednesday