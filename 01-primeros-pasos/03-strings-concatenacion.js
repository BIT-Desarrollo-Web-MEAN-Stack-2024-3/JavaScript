const name = prompt( 'Por favor digite su nombre' );

/** En JavaScript encontramos 3 tipos de concatenacion (union entre valores de variables o constantes con strings) */

/** Forma 1: Usando el metodo concat() --- Obsoleto, pero recordar que funciona */

let mensaje = 'Hola, '.concat( name ).concat( ' bienvenido a clase :) ' );
console.log( mensaje );

/** Forma 2: Usando el Operador + */
mensaje = 'Hola, ' + name + ' bienvenido a clase :D';
console.log( mensaje );

/** Forma 3: Usando 'Template Strings' (EcmaScript 5, 2015) */
// ``  : Backtics (Obligatorias)
// ${} : Interpolacion se usa para desplegar el valor contenido en una variable o constante

mensaje = `Hola, ${ name } bienvenido a clase! XP`;
console.log( mensaje );
