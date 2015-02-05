'use strict';

//  ==========================================================================
//  Math Round
//  ==========================================================================

	

	// Syntax
	Math.round(x);


	// Returns the value 20
	x = Math.round(20.49);


	// Returns the value 21
	x = Math.round(20.5);


	// Returns the value -20
	x = Math.round(-20.5);


	// Returns the value -21
	x = Math.round(-20.51);


	// Returns the value 1 (!)
	// Note the rounding error because of inaccurate floating point arithmetics
	// Compare this with Math.round10(1.005, -2) from the example below

	document.write( Math.round(1.005 * 100) / 100); // => 1
	
