
let aviones = [];
let contador = 3;

aviones.push( { 'id'         : 1,
                'fabricante' : 'General Dynamics',
                'modelo'     : 'F-16',
                'year'       :  1978} );
aviones.push( { 'id'         : 2,
                'fabricante' : 'Airbus',
                'modelo'     : '380',
                'year'       :  2007 } );
aviones.push( { 'id'         : 3,
                'fabricante' : 'Grumman',
                'modelo'     : 'F-14',
                'year'       :  1974 } );

exports.listarAviones = function (){
    console.log("NegocioAviones: listarAviones");
    return aviones;
}

exports.insertarAvion = function(avion){
    avion.id = ++contador;
    aviones.push(avion);
}



