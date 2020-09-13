var http = require('http');
var hostName = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><head><body>Hello World!</body></head></html>');
})

server.listen(port, hostName, () => {
    console.log(`Server started at ${hostName}:${port}`);
})