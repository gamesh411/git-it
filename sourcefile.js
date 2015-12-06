var http = require('http');
var url  = require('url');

var port = +process.argv[2];

var server = http.createServer(function(req, res){
    req.pipe(res);
});

server.listen(port);
