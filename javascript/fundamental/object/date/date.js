'use strict';

//  ==========================================================================
//  Date
//  ==========================================================================

	

	// Syntax
	Date();
	Date(value);
	Date(dateString);
	Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);


	// Simple
	document.getElementById("xpto").innerHTML = Date();
	// return: Wed Feb 25 2015 00:08:08 GMT-0300 (BRT)


	var date = new Date();
	document.getElementById("xpto").innerHTML = date;
	// return: Wed Feb 25 2015 00:08:08 GMT-0300 (BRT)


	var birth = new Date(1980,11,5);
	console.log(birth);
	// return: Fri Dec 05 1980 00:00:00 GMT-0300 (BRT)


	var date = new Date();
	console.log(date.toUTCString());
	// return: Wed, 25 Feb 2015 03:48:56 GMT


	var date = new Date();
	console.log(date.toDateString());
	// return: Wed Feb 25 2015


	var date = new Date(99,5,25,11,33,30,0);
	console.log(date);
	// return: Thu Jun 24 1999 11:33:30 GMT-0300 (BRT)