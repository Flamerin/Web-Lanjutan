import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/users/:userId/books/:booksId', function (req,res) {
    res.send(req.params);
});

var data = bodyParser.urlencoded({ extended:false});
app.post("/api/datmhs",data,function(req,res){
    res.send(req.body);
});