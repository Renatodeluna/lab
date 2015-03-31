'use strict';

//  ==========================================================================
//  Document getElementsByTagName
//  ==========================================================================

	
	// Syntax
	document.getElementsByTagName(tag);	// returns an array of elements


	// Variables
	var list-item = document.getElementsByTagName("li");
	list-item.style.color = 'orange';


	// Functions
	function myFunction() {

		var x = document.getElementsByTagName("li");
		document.getElementById("xpto").innerHTML = x.length;

	}

	myFunction();


	//	Functions
	function xpto() {

		var x = document.getElementsByTagName("p");
		var i;

		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "red";
		}

	}

	xpto();

