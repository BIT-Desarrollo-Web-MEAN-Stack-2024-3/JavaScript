/** Function Flecha: Arrow Function
 * Estas aparecen con el EcmaScript 2015.
 * En clases hay un problema de "Scope" entre los metodos definidos como funciones declarativas
 * 
 * Eliminar la palabra reservada function
 * Es una funcion anonima que se asigna a una constante (variable)
 * Agregar => Despues de los parentesis antes de la llave de apertura
 */

despedirse();

const despedirse = () => {
    let nombre = 'Mady';
    console.log( nombre + ' hasta la vista baby!' );
}
