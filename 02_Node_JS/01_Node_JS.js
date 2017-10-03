

let http = require("http");

let servidor = http.createServer( function(request, response){
    console.log("Peticion recibida");
    response.writeHead(200, { 'content-type' : 'text/html', })
    response.end("<meta charset='UTF-8'><marquee><h1>Hola, ¿que tal?</h1></marquee>");
}).listen(3000);

console.log("Esperando peticiones...");






/*
//console.log("¡Hola mundo!");

//Añadimos a nuestro fichero los modulos que necesitamos
//Guardamos el modulo en una variable que luego utilizaremos para acceder a las funciones
let http = require("http");

//Creamos un servidor proporcionamos la función que se ejecutara cuando llegue una petición
//Arrancamos el servidor indicando un puerto (1-64k), ahi puertos que es mejor no escoger
/*
let servidor = http.createServer( function(){
    console.log("Peticion recibida");
});
servidor.listen(3000);
*/

//La funcion que proporcionamos procesara cada peticion proporcionando una respuesta
//Nos entregan dos parámetros la petición y la respuesta -> (en blanco)
/*
let servidor = http.createServer( function(request, response){
    console.log("Peticion recibida");

    //Configuramos la cabecera de la respuesta 'reponse.'
    //writeHead( ResponseCode, {contenido de la cabecera} )
    response.writeHead(200, { 'content-type' : 'text/html', })
    //Escribimos en el body y finalizamos la peticion
    response.end("<meta charset='UTF-8'><script> alert('Hola');</script><marquee><h1>Hola, ¿que tal?</h1></marquee>");

}).listen(3000); 
console.log("Esperando peticiones..."); */