var http = require("http");

var manejador = function(solicitud, respuesta){
console.log("I just to receive a new request");
respuesta.end("Hello World!");
};



var servidor = http.createServer(manejador);
servidor.listen(8081);