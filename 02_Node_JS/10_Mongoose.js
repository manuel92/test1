const mongoose = require("mongoose");
//Promesas de Mongose
//En la linea de abajo le decimos a la app que mongoose.Promise es ahora gloabal.Promise y global se refiere a JS. 
//Ahora se crearan Promises Globales
const M = mongoose.Promise;
mongoose.Promise = global.Promise; //Al loro


const url = "mongodb://localhost:27017/bbdd";

//
//INSERTAR UN OBJETO
//
//1-Crear el objeto con new
//2-Invocar su función save

//Conectando con la db
mongoose.connect(url, {useMongoClient: true});

let Schema = mongoose.Schema; //Schema es una fucnión
//console.log(Schema); Muestra lo que es


//Definir el Schema
let cocheSchema = new Schema(
    {   
        //_id: { type:String, required:true, unique:true }, //manera para incluir mas especificaciones acerca del valor. 
        marca:String,
        modelo:String,
        potencia:Number,
    },
    //{ versionKey: undefined }
    { versionKey: false } //Quita el valor __v de los valores del objeto que automaticamente crea Mongodb
);

//mongoose.model('nombre_coleccion', esquema'definidoAnteriormente');
//let Coche es la variable que guarda el modelo de coche para poder operar con el
let Coche = mongoose.model('coches', cocheSchema);

//Para operar con el Objeto Coche y se inserte en la DB siempre el new Coche, Coche es un modelo de mongoose que ya tiene db, coleccion, y 
//Schema definido con anterioridad
let c1 = new Coche({ marca:"SEAT", modelo:"1430", potencia:65 });
let c2 = new Coche({ marca:'AUDI', modelo:"S3", potencia:150 })
console.log(c1);
console.log(c2.marca);
/*
c2.save(function(err){

});*/

//'c1' tiene funciones a parte de marca, modelo y potencia
/*
//.save(callback(err){}) su funcion es para guardar 
c1.save(function(err){
    if( err ){ throw err }
    console.log("coche insertado");
});
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
//BUSCAR OBJETOS POR ID {DB}
//

//1- Para buscar objetos por id usamos directamente la función Coche.
//Coche es una funcion y una funcion en JS es un objeto. Coche tiene funciones para poder utilizar ej: Coche.findById( _ID_, callback(err, objeto){console.log(objeto)} )
/*
Coche.findById("5a032890b0f11f12f86793a4", function(err, coche){ //Esta funcion es la Callback
    if( err ){ throw err }
    console.log("Encontrado:");
    console.log(coche);
});
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
//ELIMINAR POR ID {DB}
//
/*
Coche.findByIdAndRemove("5a032890b0f11f12f86793a4", function(err, rs){ //Esta funcion es la Callback
    if( err ){ throw err }
    console.log("¡Coche borrado!");
    console.log(rs);
});
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Para asegurarse de que los hilos van acorde y ofrezcan un servicio correcto. Se debería de asegurar que primero lo busca y luego lo borra si la operación 
//lo requiere.
/*
Coche.findById("5a032e60b618d412dccfb3d5", function(err, coche){ //Esta funcion es la Callback
    if( err ){ throw err }
    console.log("Encontrado:");
    console.log(coche);
    Coche.findOneAndRemove( "5a032e60b618d412dccfb3d5", function(err, rs){ //Esta funcion es la Callback
        if( err ){ throw err }
        console.log("¡Coche borrado!");
        //console.log(rs);
    });
}); 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//
//BUSCAR EN GENERAL OBJETOS {DB}
//

let criterio = {marca:'AUDI'};
Coche.find(criterio, function(err, coches){
    if(err){throw err}
    console.log("Listado:");
    console.log(coches);
    console.log(coches.length);
} );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
//MODIFICAR OBJETOS {DB}
//

//Con estas dos modificamos sin tener previamente el objeto:
//Coche.findByIdAndUpdate(id, { nuevosValores }, callback(err)); Se localiza el objeto por su id y se actualiza con los 'nuevosValores'.
//Coche.findOneAndUpdate( {criterio}, {nuevosValores}, callback(err, rs) ); Se localiza el objeto usando la variable 'criterio' y se actualiza con los 'nuevosValores'.
/*
promesa = Coche.findById("5a0331f6359f820970971b5a");
promesa.then(function(coche){
    //Valoramos si se debe modificar o no
    //Digamos que hay que modificar
    coche.potencia = coche.potencia+25;
    coche.save();

}).catch(function(err){
    console.log(err)
});
*/



//
//BORRAR OBJETOS {DB}
//

//Con estas funciones podemos eliminar antes de tener el objeto
//Coche.findByIdAndRemove({criterio}, callback(err){})
/*
Coche.findOneAndRemove( "5a032e60b618d412dccfb3d5", function(err, rs){ //Esta funcion es la Callback
console.log("¡Coche borrado!");
console.log(rs);
});
*/

//Primero buscar y luego decidir si borramos o no
promesa = Coche.findById("5a03321ca740d40cf4f44d3b");
promesa.then(function(coche){
    //Valoramos si se debe borrar o no
    coche.remove();
}).catch(function(err){
    console.log(err)
});








//Para liberar la conexión

