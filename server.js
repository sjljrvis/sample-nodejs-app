

var http = require('http')
var port = process.env.PORT || 3000;
var userName = __dirname.trim()

var server = http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Hello world !!! \n')
});

server.listen(port);

console.log('Server running at http://localhost:' + port + userName);

