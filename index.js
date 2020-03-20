var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url, true),
        fileName = '.' + parsedUrl.pathname;

    fs.readFile(fileName, (err, data) => {
    
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Halaman tidak ditemukan");
        } else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
        
    });
});

server.listen(port);

console.log("Server is running on http://localhost:8080/");