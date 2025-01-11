const valorConcierto = 120;

const persona = {
    name: 'Juan',
    age: 17,
    gender: 'male',
    height: 1.67,
    email: 'juan@gmail.com'
};

/** Crea un algoritmo para que a partir del objecto anterior calculemos el valor de la entrada a un concierto 
 * Si el genero es 'female' entonces hay un descuento del 20% 'Debes pagar $XXX'
 * Si el genero es 'male' entonces no hay descuento 'Debes pagar $120'
 * Si es menor de edad, lanza un mensaje de "Solo para mayores de edad"
*/

/** Evalue si la persona era menor de edad */
if( persona.age < 18 ) {
    console.log( "Solo para mayores de edad" );
}
else {
    if( persona.gender == 'female' ) {
        console.log( 'Debes pagar $' + ( valorConcierto - ( valorConcierto * 0.2 ) ) );
    }
    else {
        console.log( 'Debes pagar $' + valorConcierto );
    }
}