/** La mayoria de lenguajes de programacion comparten los siguientes bucles */

/** Bucle FOR 
 * Sintaxis:
    for( Inicializar; Condicion; Incremento/Decremento ) {
        // Sentencias que deseamos repetir
    }
*/
for( let i = 0; i < 10; i = i + 1 ) {
    console.log( 'for', i );
}

/** Bucle WHILE 
 * Sintaxis:
    Inicializar
    while (Condicion) {
        // Sentencias que deseamos repetir
        Incremento/Decremento
    }
*/
let i = 10;
while ( i < 10 ) {
    console.log( 'while', i );
    i = i + 1;
}

/** Bucle DO-WHILE 
 * Sintaxis:
    Inicializar
    do {
         // Sentencias que deseamos repetir
         Incremento/Decremento
    } while (Condicion);
*/
let j = 10;
do {
    console.log( 'do-while', j );
    j = j + 1;
} while ( j < 10 );