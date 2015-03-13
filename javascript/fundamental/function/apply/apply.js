'use strict';

//  ==========================================================================
//  Apply
//  ==========================================================================

	

	// Syntax
	//fun.apply(thisArg, [argsArray]);


	// Simple
	var url = 'renatodeluna.com';
	var site = { url : 'developer front-end' };

	function f(p1,p2) {
		console.log(this.url + ' - ' + p1 + ' - ' + p2);
	}

	f('javascript', 'site');
	f.call(site, 'code', 'developer');
	// return:
	// 	undefined - aprendendo javascript - no site
	// 	desenvolvedor front-end - estudando codigos - no desenvolvedor

	var person = { 

		age : 10,
		bar : function (name) {
			return 'Hello '+name+', you have '+this.age+' year old';
		}

	};

	var person2 = {
		age: 20
	}

	console.log(person.bar('joao'));
	console.log(person.bar.apply(person2,['joao']));
	// return:
	// 	undefined - javascript - site
	// 	developer front-end - code - developer


