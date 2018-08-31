//montar un servidor donde se sirve un archivo
//se hace require de http
var http = require("http"),
//se usa modulo de node fs(fileSystem) que se comunica con el sistema de archivos de la computadora
fs = require("fs");
//guardamos en una variable lo que retorna
fs.readFile("./index.html", function(err,html){
    http.createServer(function(req,res){
        res.write(html);
        res.end();
        }).listen(3000);
});


