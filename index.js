var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

var server = http.createServer(function(req, res){
    fs.readFile('./index.html', (err, data) => {
    
    if(err) throw err;
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    });
});

server.listen(port);

console.log("Server is running on http://localhost:8080/");