var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'debater', hobbies: ['eating', 'speaking', 'debating']};
	res.render('profile.ejs', {person: req.params.name, data: data});
});



app.listen(3000);





























/*


var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': })
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}	else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}
});

server.listen(3000, '127.0.0.1');

*/