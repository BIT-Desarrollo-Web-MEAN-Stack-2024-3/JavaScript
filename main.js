/* Obligamos a que cargue la página primero antes que se ejecute este codigo */
window.onload = function (event) {
    const pEl = document.querySelector( '#parrafo' );

    console.log( pEl.textContent );    
}