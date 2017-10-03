let fs = require("fs");

//Leyendo sincronamente al hilo que ejecuta al codigo es también el que lee el archivo
console.log("========================");
let data = fs.readFileSync("ficheros/texto.txt"); //ruta relativa
//fs.readFileSync("C://apache/texto.txt"); //ruta absoluta
console.log(data.toString());


//Leyendo asincronamente un fichero 
console.log("========================");

fs.readFile("ficheros/texto.txt", function(error, data){
    console.log("Fichero leido");
    console.log(data.toString());
});

console.log("FIN");

