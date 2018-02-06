var express = require('express');

var port = process.env.PORT || 8080;

var app = express();

app.get('/', (req, res) => {
    res.end(JSON.stringify(
        {"ipaddress":req.ip, 
        "language": req.get('Accept-Language'),
        "software": req.get('User-Agent')
    }));
});

app.all('*', function (req, res) {
    res.writeHead(404, {"Content-Type":"text/plain"});
    res.end("Oops! That page doesn't exist here"); 
 });

app.listen(port);