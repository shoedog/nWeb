var Browser = require('zombie'),
	assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){
	
	setup(function(){
			browser = new Browser();
	});

	test('requesting a group rate quote from the tour page should populate the referrer field', function(done){
		//var referrer = 'http://localhost:3000/demos/tour';
		browser.visit('http://localhost:3000/demos/tour', function(){
			browser.clickLink('.requestGroupRate', function(){
				assert(browser.field('referrer').value === 'http://localhost:3000/demos/tour' );
				done();
			});
		});
	});

	test('visiting the "request group rate" page directly should result in an empty referrer field', function(done){
		browser.visit('http://localhost:3000/demos/request-group-rate', function(){
				assert(browser.field('referrer').value === '' );
				done();
			});
		});
});

	
	

