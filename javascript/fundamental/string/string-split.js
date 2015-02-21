'use strict';

//  ==========================================================================
//  Array Split
//  ==========================================================================

	

	// Syntax
	str.split([separator[, limit]]);


	// Simple 
	var xpto = "How are you doing?";
	console.log(xpto.split(" ")); // space
	// return array ["How", "are", "you", "doing?"]
	console.log(xpto.split("?"));
	// return array ["How are you doing", ""]

	var xpto = "How are, you, doing?";
	console.log(xpto.split(","));
	// return array ["How are", " you", " doing?"]
	console.log(xpto.split("you"));
	// return array ["How are ", " doing?"]

	var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
	console.log(monthString.split(","));
	// return array:
	// ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]