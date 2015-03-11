'use strict';

//  ==========================================================================
//  Date getMonth
//  ==========================================================================

	

	// Syntax
	dateObj.getMonth()


	// Simple
	var d = new Date();
	var n = d.getMonth();

	console.log(n);
	// return 2


	var Xmas95 = new Date('December 25, 1995 23:15:30');
	var month = Xmas95.getMonth();

	console.log(month);
	// return 11


	var d = new Date();
	var month = new Array();

	month[0]  = "January";
	month[1]  = "February";
	month[2]  = "March";
	month[3]  = "April";
	month[4]  = "May";
	month[5]  = "June";
	month[6]  = "July";
	month[7]  = "August";
	month[8]  = "September";
	month[9]  = "October";
	month[10] = "November";
	month[11] = "December";

	var n = month[d.getMonth()];

	console.log(n);
	// return March




