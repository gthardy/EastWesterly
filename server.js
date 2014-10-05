
var express = require('express'),
	contact = require('./api/contact');

var app = express();

// Logging
app.use(function(req, res, next){
	console.log('%s %s', req.method, req.url);
	next();
});

// API Customer
app.get('/api/contact', contact.sendEmail);

// Site Directory
app.use(express.static('public'));

app.use(function(req, res){
	res.sendfile(__dirname + '/public');
})

app.listen(process.env.port || 7000);