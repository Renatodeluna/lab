'use strict';


// 	------ Alert -------------------------------------------------
	
	// Syntax
	window.alert(message);


	// 'window' not mandatory
	alert('Hello Word! ;)');



	// Line break
	alert('Hello\nWord! ;)');



	var confirmationForm = function(menssage) {
		alert(menssage);
	}

	document.getElementById('sendButton').onclick = function() { 
		confirmationForm('Sent successfully!'); 
	};



	// Hostname
	var myHostname = function() {
		alert(location.hostname);
	};

	myHostname();