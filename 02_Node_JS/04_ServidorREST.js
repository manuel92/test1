
let http = require("http");
let fs   = require("fs");
let negocioAviones = require("./04_NegocioAviones.js"); //Ruta relativa

http.createServer( function(request,response){

    let url = request.url;
    console.log("Petición recibida: ");
    console.log(request.method+" "+url);

    if( request.method == "GET" && request.url=='/aviones'){
        listarAviones(request, response);
    } else if( request.method == "POST" && request.url=='/aviones'){
        insertarAvion(request, response);
    } else if( request.method == "PUT" && request.url=='/aviones'){
        //
    } else if( request.method == "DELETE" && request.url=='/aviones'){
        //
    } else {
        leerRecursoEstatico(request, response);
    }

} ).listen(3333);

function leerRecursoEstatico(request, response){

    //Síncrono:
    //let data = fs.readFileSync("ficheros"+request.url);
    let url = request.url;

    fs.readFile("ficheros"+url, function(error, data){
        if( error != null){
            console.log("ZAS!")
            response.writeHead(404, { 'content-type' : 'text/html' });
            response.end("<h2 align='center'>404. Agua</h2>");
            return;
        }
        
        let extension = url.split(".")[1];
        let mimeType = null;
        switch(extension){
            case 'html' : mimeType = 'text/html';
                          break;
            case 'css'  : mimeType = 'text/css';
                          break;
            case 'js'  :  mimeType = 'application/javascript';
                          break;
            //case ...
            default : mimeType = 'text/plain';
                      break;
        }

        response.writeHead(200, { 'content-type' : mimeType });
        response.end(data.toString()); //response.write
    });   

}

//1-recoger cualquier dato que venga con la petición
//2-transformar (si es necesario) esa informacion en algo que
//  entienda la capa del modelo
//3-llamar al método de negocio adecuado
//4-si el metodo de negocio devuelve algo transformarlo al formato
//  adecuado y...
//5-entregar la respuesta

function listarAviones(request, response){
    let aviones = negocioAviones.listarAviones();
    
    response.writeHead(200, { 'content-type' : 'application/json' });
    response.end(JSON.stringify(aviones));
}

function insertarAvion(request, response){
    
    /*Una manera de hacerlo:
    let avion = null;
    request.on('data', function(datos) {
        console.log(datos.toString());
        avion = JSON.parse(datos);
    });

    request.on('end', function(){
        negocioAviones.insertarAvion(avion);
        response.writeHead(200, { 'content-type':'text/plain'} );
        response.end("El avion se ha insertado");
    });*/

    //Otra:
    request.on('data', function(datos) {
        console.log(datos.toString());
        avion = JSON.parse(datos);
        negocioAviones.insertarAvion(avion);
        //response.setHeader( 'content-type', 'text/plain' );
        response.writeHead(200, { 'content-type':'text/plain'} );
        response.end("El avion se ha insertado");
    });    

}