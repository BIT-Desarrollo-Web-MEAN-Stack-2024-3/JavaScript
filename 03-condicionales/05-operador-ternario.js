/** Un operador ternario es la forma de abreviar un if-else */

const age = 16;

if( age > 18 ) {
    console.log( 'Eres mayor a 18 por que tienes ' + age + ' anios' );
}
else {
    console.log( 'Lo sentimos intenta cuando seas mayor de edad' );
}

/** Conversion a operador ternario 
 * Sintasis:
 * (condicion) 
 *      ? si la condicion es verdadera 
 *      : si la condicion no se cumple;
*/


/** Ejemplo 1: Muy verboso */
( age > 18 ) 
    ? console.log( 'Eres mayor a 18 por que tienes ' + age + ' anios' ) 
    : console.log( 'Lo sentimos intenta cuando seas mayor de edad' );

/** Ejemplo 2: El ternario retorna valores */
const mensaje = ( age > 18 ) 
    ? 'Eres mayor a 18 por que tienes ' + age + ' anios' 
    : 'Lo sentimos intenta cuando seas mayor de edad';

console.log( mensaje );