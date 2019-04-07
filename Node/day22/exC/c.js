var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/stylesheets/main.css') {
        fs.createReadStream(__dirname + '/stylesheets/main.css').pipe(res);

    } else if(req.url === '/image/flower-icon.png') {
        fs.createReadStream(__dirname + '/image/flower-icon.png').pipe(res);

    } else if(req.url === '/image/flowershop.jpg') {
        fs.createReadStream(__dirname + '/image/flowershop.jpg').pipe(res);

    } else if(req.url === '/image/logo.png') {
        fs.createReadStream(__dirname + '/image/logo.png').pipe(res);

    } else if(req.url === '/image/payment-icon.png') {
        fs.createReadStream(__dirname + '/image/payment-icon.png').pipe(res);

    } else if(req.url === '/image/phone-icon.png') {
        fs.createReadStream(__dirname + '/image/phone-icon.png').pipe(res);

    } else if(req.url === '/image/truck-icon.png') {
        fs.createReadStream(__dirname + '/image/truck-icon.png').pipe(res);

    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');