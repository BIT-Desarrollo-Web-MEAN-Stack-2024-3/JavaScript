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

const sumarEdades = ( lista ) => {
    let totalEdades = 0;
    for( let i = 0; i < lista.length; i++ ) {
        totalEdades = totalEdades + lista[ i ].age;
    }

    return totalEdades;
}

const promedio = ( sumaValores, longitudLista ) => {
    return sumaValores / longitudLista;
}


let totalEdades = sumarEdades( people );
let prom = promedio(totalEdades,people.length);
console.log(totalEdades, prom);

const profes = [
    { name: 'Carlos', gender: 'male', age: 30 },
    { name: 'Juan Sebastian', gender: 'male', age: 32 },
    { name: 'Juan Carlos', gender: 'female', age: 47 }
];

totalEdades = sumarEdades( profes );
prom = promedio( totalEdades, profes.length );
console.log(totalEdades, prom);
