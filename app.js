var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, function(){
	console.log("listening on port 3000")
})