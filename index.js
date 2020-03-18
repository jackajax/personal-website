var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end('<h1>My Personal Website<h1>');
});

server.listen(port);

console.log("Server is running on http://localhost:8080/");