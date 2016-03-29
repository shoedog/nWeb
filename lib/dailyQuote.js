var randQuote = [
	"Do or do not, there is no try.",
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"Whenever possible, keep it simple.",
	"The oak tree and the cypress grow not in each other's shadow.",
	"Work is love made visible.",
];

exports.getQuote = function() {
	var idx = Math.floor(Math.random() * randQuote.length);
	return randQuote[idx];
};
