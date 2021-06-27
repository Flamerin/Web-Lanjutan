var express = require("express");
var app = express();
var BodyParser = require("body-pareser");
var logger = require("morgan");

module.exports = (req,res, next) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    }catch(error){
        return res.status(401).json({message : 'Auth failed'});
    };
};

const myMiddleware = (req,res, next) =>{
    if(req.params.nim === "123"){
        console.log("Nim terverifikasi");
        next();
    } else{
        const err = {
            status: "error",
            data: {
                nim: req.params.nim,
            },
        };
        next(err);
    };
};

app.get("/api/:nim/:nama",myMiddleware,function(req,res){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.send(req.params);
})

app.use((error, req,res, next)=>{
    res.send(error);
});