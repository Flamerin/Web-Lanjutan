const http = require('http');

http
    .createServer(function (req,res){
        res.write("Module HTTP Web");
        res.end();
    })
    .listen(3400);