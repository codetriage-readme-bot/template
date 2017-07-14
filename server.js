var static = require('node-static'),
	file = new static.Server('./public'),
	port = 3997;

console.log(port);

require('http').createServer(function (request, response) {
	if (!/\./.test(request.url)) {
		request.url = '/';
	}
	file.serve(request, response);
}).listen(port);
