const estudiantes = [ 'Matias', 'Juan Sebastian', 'Mady', 'Juan Diego', 'Duvan' ];

/** Bucles de JavaScript */

/** for of
 * Solo itera de uno en uno hacia adelante
 * Extrae el valor contenido en el campo */
for( let estudiante of estudiantes ) {
    console.log( estudiante );
}

/** for in 
 * Solo itera de uno en uno hacia adelante
 * Extrae el valor del indice */
for( let estudiante in estudiantes ) {
    console.log( estudiante );
}

/** forEach: es un metodo de las listas y sirve para hacer bucles */
estudiantes.forEach( function( value ) {
    console.log( value );
} );