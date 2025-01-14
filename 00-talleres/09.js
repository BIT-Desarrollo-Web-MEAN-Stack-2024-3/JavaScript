// 9. Comparación de cadenas

//     Crea un programa que:

//     - Defina una constante con el nombre de password y asigne "123456789"
//     - Solicita una cadena al usuario, indicando en el mensaje "Digite su nombre"
//     - Solicite una cadena al usuario, indicando en el mensaje "Digite su contraseña".
//     - Compare la contraseña es igual o diferente al valor en 'password' utilizando el operador ===.
//     - Imprima un mensaje indicando el resultado, por ejemplo: 
//       - Si las cadenas son iguales "Bienvenido [nombre-usuario]".
//       - Si las cadenas son diferentes "Acceso denegado"


const password = '123456789';

const nombre = prompt( 'Digite su nombre' );
const contrasena = prompt( 'Digite su contraseña' );

if( contrasena === password ) {
    alert( 'Bienvenido ' + nombre );
}
else {
    alert( 'Acceso denegado' );
}

