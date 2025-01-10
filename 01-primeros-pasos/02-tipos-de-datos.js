/** TIPOS DE DATOS
 * lenguajes tradicionales (C, C++, Java, etc - Lenguajes de Tipado fuerte)
 * Tipos Primitivos: 
        - Caracter (Char)
        - Cadenas (Strings), 
        - Falso/Verdadero (Booleans),
        - Enteros (Integer/int)
        - Punto decimal (Float)
        - Punto decimal de doble precision (Double)
    Estructuras de datos
        - Variables & Constantes
        - Object (Objetos)
        - Array (vectores)
        - List (Listas)
 */

/** TIPOS DE DATOS en JavaScript  
       Tipos Primitivos
        - Cadenas (Strings), 
        - Falso/Verdadero (Booleans),
        - Enteros, Decimales (Number)
        - Nulos (null)
        - Indefinido (undefined)
        - No es un numero (NaN, Not is a Number) 
    Tipos Complejos lenguajes tradicionales
        - Object (Objetos)
        - List (Listas)
        - Functions (funciones)
*/


// Ejemplos de tipos de datos en JavaScript
//      Tipos Primitivos: 
//         - Cadenas (Strings), 
             let name = 'Juan';
//         - Falso/Verdadero (Booleans),
             let isMale = true; 
//         - Numeros (Numbers)
             let age = 46;
             let height = 1.67;
//         - null             (nulo)
             let nullValue = null;
//         - undefined        (Indefinido)
             let undefinedValue = undefined;
//         - NaN              (Not is a Number)
             let otherValue = NaN;

//      Tipos Complejos
//         - Arrays o Lists (Uno no se parece al otro) 'Object'
             let fruits = [ 'orange', 'pinapple', 'banana', 'apple' ];
             // Indices        0           1          2        3        ....

             /** Matriz o vector de dos dimensiones */
             let ticTacToe = [ 
                [X, 0, X], 
                [X, X, 0], 
                [0, 0, X]  
            ];

            console.log( ticTacToe[1] );  // Retorna la lista de la mitad [X, X, 0]
            console.log( ticTacToe[1][1] );  // Retorna la X de la mitad

//         - Objects 'object'
             let persona = {
                name: 'Juan',
                age: 46,
                hobbies: [ 'Codding', 'Singing' ]
             } 

             /** Sintaxis Punto */
             console.log( persona.name );       // Juan
             console.log( persona.hobbies[1] ); // Singing

             /** Sintaxis Array/Lista */
             console.log( persona['name'] );        // Juan
             console.log( persona['hobbies'][1] );  // Singing
             
    /** Otras combinaciones */
    let people = [ 
        { name: 'Mady', age: 30, hobbies: [ 'Futbol', 'Videogames', 'Anime' ] }, 
        { name: 'Duvan', age: 15, hobbies: [ 'Montar bicicleta', 'Videogames' ] } 
    ];

    /** Obtener la edad de Mady */
    console.log( people[0].age );           // 30
    /** Obtener el primer hobbie de Duvan */
    console.log( people[1].hobbies[0] );    // 'Montar bicicleta'   