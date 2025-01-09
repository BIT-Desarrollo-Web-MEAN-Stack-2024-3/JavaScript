/** Reglas para escribir nombres de variables o constantes 
 * 1. No simbolos diferentes a $ o _ (Siempre al principio)
 * 2. Se recomienda usar camelCase (JavaScript), snake_case, HugaroCase
 * 3. Se recomienda usar todos nombres en minusculas para las variables
 * 4. Se recomienda usar todos los nombres en MAYUSCULAS para las constantes, si la palabra es compuesta CANT_PRODUCTOS
 * 5. No usar como nombre las palabras reservadas del lenguaje.
 * 6. No nombrar dos variables o funciones con el mismo nombre
 * 
 * RECOMENDACIONES>
 * 1. Las variables deben tener nombres que nos permitan saber que contienen o cual es su uso
 * let numeroTelefono = '3007023287';
*/
saluda();

/** Hay 3 maneras de definir variables */
nombreProgramador = 'Mady';             // JavaScript no estaba normalizado
var dinero = 12.3;                      // var
let hasComido = false;                  // let: Forma habitual y recomendada de definir una variable

/** Constantes */
const PI = 3.141519;
const iva = '0.19';               // :'(  Los desarrolladores de JavaScript no cumplen con esta regla

/* Hoisting: Elevan los valores de las variables definidas como var y las funciones clasicas de JavaScript */
function saluda() {
    console.log( 'Saludos a todos!' );
}

// console.log( window );

/* Si el valor "numerico" es de color morado puedo intuir que el valor number, si es blanco o negro es un string */
console.log( PI, iva );
console.log( PI );
console.log( iva );

/** Consideraciones con la definicion de una variable usando VAR */
var numeroTelefono = '3007023287';
var numeroTelefono = '3007023288';

/** Consideraciones con la definicion de una variable usando LET */
let developer = 'Juan Sacristan';
// let developer = 'Yalef';  // No se puede refinir
developer = 'Yalef';

