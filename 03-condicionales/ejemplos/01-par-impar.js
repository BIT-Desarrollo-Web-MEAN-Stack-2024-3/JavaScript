/** Ingrese un valor que me indique si un numero es par o impar */
const numero = prompt( 'Ingresa un numero' );

// if( numero % 2 == 0 ) {
//     console.log( 'Es par' );
// }
// else {
//     console.log( 'Es impar' );
// }

const respuesta = ( numero % 2 == 0 ) 
    ? 'Es par'
    : 'Es impar';

console.log( respuesta );

