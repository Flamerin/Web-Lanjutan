import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 6000;

app.use(bodyParser.json());

app.get("/users/:userId/books/:booksId", function (req,res) {
    res.send(req.params);
});

var data = bodyParser.urlencoded({ extended:false});
app.get("/api/cari", function(req,res,next){
    var nama = req.query.nama;
    console.log(`nama : ${nama}`);
    var umur = req.query.umur;
    console.log(`umur : ${umur}`);
    res.send(umur);
});

app.get("/api/:nim/:nama", function(req,res){
    res.statusCode = 200;
    res.setHeader("Content-Type" , "text/plain");
    res.send(req.params);
});