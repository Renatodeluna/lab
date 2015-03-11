'use strict';

//  ==========================================================================
//  Date getDate
//  ==========================================================================

	

	// Syntax
	dateObj.getDate()


	// Simple
	var d = new Date();
	var n = d.getDate();

	console.log(n);
	// return 11


	var Xmas95 = new Date('December 25, 1995 23:15:30');
	var day = Xmas95.getDate();

	console.log(day);
	// return 25


	console.log(new Date().getDate());
	// return 11
	



