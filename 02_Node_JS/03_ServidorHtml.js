let http = require("http");
let fs   = require("fs");

http.createServer( function(request,response){

    let url = request.url;
    console.log("Petición recibida: ");
    console.log(request.method+" "+url);
    
    //
    //Movidas interesantes
    //

    leerRecursoEstatico(request, response);

} ).listen(1100);

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
        response.end(data.toString()); 
    });   

}

