const http = require("http");
const fs = require("fs");

http
    .createServer(function(req,res){
        fs.readFile("index.html",(err,data) => {
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });

        fs.appendFile("mw.txt", "Kelas Web Lanjutan MW-B Sore", function(err){
            if(err) throw err;
            console.log("Berhasil disimpan");
        });

        fs.open("datamw.txt","w+",function(err,file){
            if(err) throw err;
            let data = "Kelas Web Lanjutan Sore";
            fs.writeFile(file,data,(err)=>{
                if(err) throw err;
                console.log("Tersimpan");
            });
            fs.readFile(file,(err,data)=>{
                if(err) throw err;
                console.log(data.toString("utf8"));
            });
        });
    })
    .listen(3000)