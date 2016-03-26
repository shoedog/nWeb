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

//Main Route
app.get('/', function(req,res){
	res.render('home');
});

//About Route
app.get('/about', function(req,res){
	var randomQuote = 
		dailyQuote[ Math.floor(Math.random() * dailyQuote.length)];
	res.render('about', { dailyQuote: randomQuote });
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

var dailyQuote = [
	"Do or do not, there is no try.",
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"Whenever possible, keep it simple.",
	"The oak tree and the cypress grow not in each other's shadow.",
	"Work is love made visible."
];
