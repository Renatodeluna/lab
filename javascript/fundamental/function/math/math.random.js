'use strict';

//  ==========================================================================
//  Math Random
//  ==========================================================================

	

	// Syntax
	Math.random();


	// Simple 
	Math.random();
	//	return:
	//	0.0000000000000001
	//	between
	//	0.9999999999999999


	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	getRandomArbitrary(1,2);
	//	retorn ex: 1.21504772384651


	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	getRandomInt(1,2);
	//	retorn ex: 1


	function getRound(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
	getRound(1,2);
	//	retorn ex: 1


	function getRandom(num) {
		return Math.random() * num;
	}
	getRandom(10);
	//	retorn ex: 9.569983908440918

