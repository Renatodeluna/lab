'use strict';

//  ==========================================================================
//  Call
//  ==========================================================================

	

	// Syntax
	fun.call(thisArg[, arg1[, arg2[, ...]]]);


	// Simple 
	function Product(name, price) {
	  this.name = name;
	  this.price = price;

	  if (price < 0) {
	    throw RangeError('Cannot create product ' +
	    this.name + ' with a negative price');
	  }

	  return this;
	}

	function Food(name, price) {
	  Product.call(this, name, price);
	  this.category = 'food';
	}

	Food.prototype = Object.create(Product.prototype);

	function Toy(name, price) {
	  Product.call(this, name, price);
	  this.category = 'toy';
	}

	Toy.prototype = Object.create(Product.prototype);
	var cheese = new Food('feta', 5);
	var fun = new Toy('robot', 40);


	var url = 'renatodeluna.com.br';
	var site = { url : 'frontend.com.br' };

	function f(){
	  console.log(this.url);
	}

	f.call(site);
	// return frontend.com.br


	// Parameters
	var url = 'renatodeluna.com';
	var site = { url : 'developer front-end' };

	function f(p1,p2) {
		console.log(this.url + ' - ' + p1 + ' - ' + p2);
	}

	f('javascript', 'site');
	f.call(site, 'codigos', 'developer');
	// return:
	// 	undefined - javascript - site
	// 	developer front-end - codigos - developer








