/** Enunciado: 
 *  De la siguiente lista de personas calcular el promedio de las edades */

const people = [
    { name: 'Matias', gender: 'male', age: 18 },
    { name: 'Duvan', gender: 'male', age: 21 },
    { name: 'Yalef', gender: 'female', age: 22 },
    { name: 'Mady', gender: 'male', age: 30 },
    { name: 'Juan Carlos', gender: 'male', age: 47 },
    { name: 'Juan Diego', gender: 'male', age: 17 },
    { name: 'Juan Sebastian', gender: 'male', age: 18 }
];

// Agregamos una nueva persona
people.push({ name: 'David', gender: 'male', age: 33 });

console.log( people );

// Acumuladores
let sumaEdades = 0;
let promedio = 0;
let longitudLista = people.length;

/** Iteramos usando un bucle FOR para sumar */
for( let i = 0; i < longitudLista; i++ ) {
    // console.log( people[ i ].age );
    sumaEdades = sumaEdades + people[ i ].age;      // Sumamos las edades de todos las personas
}

// Calcula el promedio de las edades
promedio = sumaEdades / longitudLista;

console.log( 'El promedio de las edades es ', promedio );