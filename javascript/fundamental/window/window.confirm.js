'use strict';


// 	------ Confirm -------------------------------------------------
	
	// Syntax
	window.confirm(message);


	// 'window' not mandatory
	if(confirm('Do you really want to delete this file?')) {
		document.write('successfully deleted file!');
	};



	var reload = function() {

		if(confirm('you really want to exit this page?')) {
			location.reload();
		};

	};

	reload();