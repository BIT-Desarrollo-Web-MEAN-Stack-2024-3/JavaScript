/** TIPOS PRIMITIVOS */

/** Strings */
let name = 'Juan';
console.log( name, typeof name );       // Juan string

/** Booleans */
let isMale = true; 
console.log( isMale, typeof isMale );   // true boolean

/** Numbers */
let age = 46;
let height = 1.67;
console.log( age, typeof age );         // 46 number
console.log( height, typeof height );   // 1.67 number

const valueInfinity = 9/0
console.log( valueInfinity, typeof valueInfinity );                     // Infinity number

const valueNegativeInfinity = -9/0
console.log( valueNegativeInfinity, typeof valueNegativeInfinity );     // -Infinity number

/** Symbol */
let valueSymbol = Symbol( 'Manuela Gomez' ); 
let valueSymbol2 = Symbol( 'Manuela Gomez' ); 
console.log( valueSymbol, typeof valueSymbol );     // Symbol(Manuela Gomez) 'symbol'

/** Null */
let nullValue = null;
console.log( nullValue, typeof nullValue );   // null object

/** Undefined */
let undefinedValue;
console.log( undefinedValue, typeof undefinedValue );   // undefined Undefined

/** Not a Number (NaN) */
let nanValue = 'Sofia';
console.log( nanValue, typeof nanValue );   // Sofia string
console.log( isNaN( nanValue ) );           // true


/** TIPOS COMPLEJOS */

/** Lista unidimensional */
value = [ 'Juan', Symbol(), 79878292, [ 'r', 3, false ], true, 0.9, { name: 'Eva' } ];
console.log( typeof value );     // object

/** Lista de dos dimensiones */
value = [
    [ true, 'X', { new: true } ],
    [ 3.24, [ 'T', 6 ], 9 ],
    [ Symbol(), 'Juan', true ]
];
console.log( typeof value );     // object

/** Objeto Literal o Explicito */
vehiculo = {
    model: 1990,
    color: 'red',
    brand: 'Volkswagen',
    category: [ 'classic', 'aleman model' ],
    info: function () { 
        console.log( 'Este es un lindo ' + this.brand + ' de color ' + this.color + ' del anio ' + this.model );
    }
}
console.log( typeof value );     // object
console.log( value.model );      // 1990
value.info();

/** Function */
var sumar = function( a, b ) { 
    return a + b;
}
console.log( typeof sumar );     // function