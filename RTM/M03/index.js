const { listenerCount } = require("events");
var express = require("express");
var server = express();

var logger = require("morgan");

server.use(logger("dev"));

server.use(express.statis(__dirname + "/publik"));

server.listen(4000,function(){
    console.log("Server run");
});