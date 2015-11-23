var http = require('http');
var third = require('./third.js');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("" + third.thing1 + third.thing2);
	response.end();
}).listen(3000);