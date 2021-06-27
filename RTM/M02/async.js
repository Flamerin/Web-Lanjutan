const fs = require("fs");

fs.rename("mwpagi.json","mwsore.json",(err)=>{
    if(err) return console.error(err);
    console.log("Berhasil mengganti nama");
});

try{
    fs.renameSync("mwsore.json","mwpagi.json");
    console.log("Berhasil mengganti nama");
}catch(err){
    console.error(err);
}