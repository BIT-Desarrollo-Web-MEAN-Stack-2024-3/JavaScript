/** Listas */
const fruits = [];

fruits[ 1 ] = 'Mandarina';
fruits[ 2 ] = true;
fruits[ 3 ] = { name: 'Camila' };

// console.log( fruits );  
// console.log( fruits[3]["name"] );

/** Metodos de las listas para manipular sus datos */
fruits.push( 'Mango', 'Mora' );     // Inserta al final de lista
fruits.unshift( 'Mangostino' );     // Inserta al inicio de lista
fruits.pop();                       // Elimina el final de la lista
fruits.shift();                     // Elimina el inicio de la lista

const cantidad = fruits.length;

// console.log( fruits, cantidad );

/** Asignando valores complejos */
const estudiantes = [ { nombre: 'Mady', genero: 'Masculino' }, [ 'Yalef' ], { hombres: 9, mujeres: 1 } ];

// console.log( estudiantes );
estudiantes[0] = { mascota: 'Milo' }

estudiantes.push({ dia: 'Hoy es Viernes chiquito' })



// const name = 'Milo';
// name = 'Maria';

// console.log(name);

/** Las constantes en variables de tipo complejo pueden modificar sus valores de nivel 2 para arriba, es decir no se pueden cambiar los tipos 
 * Ejemplo con listas
*/
// const games = [ 'GTA', 'Halo' ];
// games[ 0 ] = 'Tetris';

// games = true;

// console.log( games );

// Ejemplo con Objectos
const persona = {
    name: 'Mathias',
    age: 18
}

persona.hobbies = [ 'Videogames' ];
persona = []
console.log(persona);

// Ejemplo con Funciones