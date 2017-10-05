let fs = require("fs");

//Leyendo síncronamente el hilo que ejecuta el codigo es tambien
//el que lee el archivo
console.log("===================================");
let data = fs.readFileSync("ficheros/texto.txt"); //ruta relativa
console.log(data.toString());

//Leyendo asincronamente un fichero es otro hilo el que ejecuta el
//trabajo
console.log("===================================");
fs.readFile("ficheros/texto.txt", function(error, data){
    console.log("Fichero leido");
    console.log(data.toString());
});
console.log("FIN");







