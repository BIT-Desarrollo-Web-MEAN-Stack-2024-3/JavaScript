const estudiantes = [ 'Matias', 'Juan Sebastian', 'Mady', 'Juan Diego', 'Duvan' ];

/** for:
 * Itera adelante/atras
 * Itera N cantidad de posiciones
 * Extrae el valor contenido en el campo y el indice
 * Si no cumple la condicion nunca itera
*/
for( let i = 0; i < 5; i = i + 1 ) {
    console.log( i, estudiantes[ i ] );
}


/** while:
 * Itera adelante/atras
 * Itera N cantidad de posiciones
 * Extrae el valor contenido en el campo y el indice
 * Si no cumple la condicion nunca itera
 * Es una alternativa al for
*/
let i = 0;
while ( i < 5 ) {
    console.log( i, estudiantes[ i ] );
    i = i + 1
}

/** do-while:
 * Itera adelante/atras
 * Itera N cantidad de posiciones
 * Extrae el valor contenido en el campo y el indice
 * Si no cumple la condicion itera al menos una vez
*/
let j = 0;
do {
    console.log( i, estudiantes[ i ] );
    j = j + 1
} while ( j < 5 );

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
estudiantes.forEach( function( value, index ) {
    console.log( index, value );
} );