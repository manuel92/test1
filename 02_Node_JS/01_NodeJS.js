console.log("¡Hola mundo!");

//Añadimos a nuestro fichero los módulos que necesitamos.
//Guardamos el modulo en una variable que luego utilizaremos
//para acceder a las funciones.
let http = require("http");

/*
//Creamos un servidor
//Proporcionamos la función que se ejecutará cuando llegue una petición
//Arrancamos el servidor indicando un puerto (1-64K)
let servidor = http.createServer( function(){
    console.log("Petición recibida");
});
servidor.listen(3000);
*/

//La función que proporcionamos procesará cada peticion proporcionando
//una respuesta.
//Nos entregan por parámetro la petición y la respuesta (la respuesta en blanco)
http.createServer( function(request, response){    
    console.log("Petición recibida");
    //Configuramos la cabecera de la respuesta
    //writeHead( ResponseCode, {contenido de la cabecera })
    response.writeHead(200, { 'content-type' : 'text/html' });
    //Escribimos en el body y finalizamos la petición
    response.end("<script>alert('hola');</script><h1>Hola que tal</h1>");

}).listen(3000);

console.log("Esperando peticiones...");
