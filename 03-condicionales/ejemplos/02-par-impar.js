/** Ingrese un valor que me indique si un numero es par o impar */

const numero = 1;

/** NaN: Es un tipo que define cuando algo NO ES UN NUMERO
 * isNaN( value ): Funcion que nos va a indicar si el valor que se le paso es o no un numero (boolean)
 */
if( isNaN( numero ) ) {
    console.log( 'Eso no es un numero, intenta de nuevo' );
}
else if( numero == 0 ) {
    console.log( numero + ' es cero' );
}
else if( numero % 2 == 0 ) {
    console.log( numero + ' es par' );
}
else {
    console.log( numero + ' es impar' );
}

