var http = require('http')
var port = process.env.PORT || 5000;
var userName = __dirname.trim()

var server = http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Hey this is a sample nodeJS application !!! \n')
});

server.listen(port);
console.log(process.env.API_KEY)

console.log('Server running at http://localhost:' + port + userName);

