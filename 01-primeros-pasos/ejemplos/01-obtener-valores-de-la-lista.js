const numeros = [ 34, 1, 5, 7, 0, 9, 11 ];
//                 0, 1, 2, 3, 4, 5, 6 

/** Quiero cambiar el indice 4 */
numeros[ 4 ] = 6;

/** Quiero cambiar el segundo valor */
numeros[ 1 ] = 8;

/** Quiero eliminar el ultimo */
numeros.pop();

/** Contar la cantidad de elementos de la lista */
console.log( 'Cantidad: ', numeros.length );

console.log( numeros );