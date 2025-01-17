/** Funcion Declarativa
 * Una funcion sirve para encapsular la logica de una tarea especifica */

/** Scope: Es el alcance que tiene una variable o constante respecto a bloques de codigo */

// let nombre = 'Juan Diego';

function despedirse() {
    let nombre = 'Mady';
    console.log( nombre + ' hasta la vista baby!' );
}
despedirse();

console.log( window );




/** Codificar Estructural */

function saludar() {
    console.log( 'Hola a todos' );
}

/** Invocar es llamar a la ejecucion de una funcion o clase */
// saludar();

function saludarPersona( nombre, apellido ) {
    return 'Hola ' + nombre + ' ' + apellido + ' como estas';
}

// console.log( saludarPersona( 'Duvan', 'Medina' ) );
// const mensaje = saludarPersona( 'Yalef', 'Amaya' );
// console.log( mensaje );

function sumar( value1, value2 ) {
    return value1 + value2;
}
function restar( value1, value2 ) {
    return value1 - value2;
}
function multiplicar( value1, value2 ) {
    return value1 * value2;
}
function dividir( value1, value2 ) {
    return value1 / value2;
}


// console.log( sumar( 9, 3 ) );
// console.log( restar( 9, 3 ) );
// console.log( multiplicar( 9, 3 ) );
// console.log( dividir( 9, 3 ) );

// console.log( sumar( 4, 2 ) );
// console.log( restar( 4, 2 ) );
// console.log( multiplicar( 4, 2 ) );
// console.log( dividir( 4, 2 ) );