const age = 16;

if( age > 18 ) {
    console.log( 'Eres mayor a 18 por que tienes ' + age + ' anios' );
}
else {
    console.log( 'Lo sentimos intenta cuando seas mayor de edad' );
}

/** Cuando la sentencia de un bloque de codigo solo tiene una linea, entonces puedo precindir de las llaves 
 * 
 * Bloque de codigo es un conjunto de sentencias que se agrupan entre llaves
*/

if( age > 18 ) {
    /** Aqui no podria quitar las llaves */
    console.log( 'Eres mayor a 18 por que tienes ' + age + ' anios' );
    console.log( 'Has ganado una entrada de concierto de tu artista favorito' );
}
else
    console.log( 'Lo sentimos intenta cuando seas mayor de edad' );