const estudiantes = [ 'Matias', 'Juan Sebastian', 'Mady', 'Juan Diego', 'Duvan' ];

/** Por favor lista las personas que estan en una posicion par */
// for( let i = 0; i < 5; i = i + 1 ) {
//     if( i % 2 == 0 ) {
//         console.log( estudiantes[ i ] );
//     }
// }

// for( let i = 0; i < 5; i = i + 2 ) {
//     console.log( estudiantes[ i ] );
// }

const people = [
    { name: 'Matias', gender: 'male', age: 18 },
    { name: 'Duvan', gender: 'male', age: 21 },
    { name: 'Yalef', gender: 'female', age: 22 },
    { name: 'Mady', gender: 'male', age: 30 }
];

/** Hacer un algoritmo que cuente cuantas mujeres y cuantos hombres hay en la lista */
let contarMujeres = 0;
let contarHombres = 0;

for( let i = 0; i < 4; i++ ) {
    if( people[ i ].gender == 'male' ) {
        contarHombres++;
    }
    else {
        contarMujeres++;
    }
}

for( let i = 0; i < 4; i++ ) {
    if( people[ i ].age <= 20 ) {
        console.log( people[ i ].name );
    }
}

console.log( 'Mujeres: ', contarMujeres, ' Hombres: ', contarHombres );


