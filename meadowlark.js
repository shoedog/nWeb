//dailyQuote.js: Quote Module
var quote = require('./lib/dailyQuote.js');

var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();

//Setup Express-Handlebars
var handlebars = require('express-handlebars')
	.create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000 );

//Static Middleware for IMG, CSS, JS
app.use( express.static( __dirname + '/public'));

// Creates ability to test in query string for routes at
// http:// . . . ?test=1, must come before routes 
app.use(function(req,res, next){
	res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';
	next();
});

//Main Route
app.get('/', function(req,res){
	res.render('home');
});

//About Route
app.get('/about', function(req,res){
	res.render('about', { 
		quote: quote.getQuote(),
		pageTestScript: '/qa/tests-about.js'
		});
});

//Contact Rout
app.get('/contact', function(req,res){
	res.render('contact');
});

//Demos - Tour Page
app.get('/demos/tour', function(req, res){
	res.render('demos/tour');
});

//Demos - Request Group Rate Page
app.get('/demos/request-group-rate', function(req, res){
	res.render('demos/request-group-rate');
});

//custom 404 page
app.use(function(err, req, res, next){
	res.status(404);
	res.render('404');
});

//custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});

