
//servidor local
//los modulos de node se pueden importar al script del servidor usando require
//libreria que vamos a importar es http que se encarga de servir apps web
var http = require("http");

var  = function(sol,res){
console.log("recibimos una nueva peticion");
respuesta.end("hola mundo");
};
//decirle en que puerto se ejecuta
//retorna un objeto 
var servidor = http.createServer(manejador);
servidor.listen(3000);

