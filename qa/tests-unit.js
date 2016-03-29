var randQuote = require('../lib/dailyQuote.js');
var expect = require('chai').expect;

suite('Random Quote Tests', function(){
	test('getQuote() should return a quote', function(){
		expect(typeof randQuote.getQuote() === 'string' );
	});
});
