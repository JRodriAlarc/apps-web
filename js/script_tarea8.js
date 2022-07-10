const nombre = document.querySelector('#campo-nombre');
const apellido = document.querySelector('#campo-apellido');
const direccion = document.querySelector('#campo-direccion');
const ciudad = document.querySelector('#campo-ciudad');
const estado = document.querySelector('#campo-estado');
const cpostal = document.querySelector('#campo-codpost');
const archivo = document.querySelector('#campo-archivo');
const genero = document.querySelector('.form-check-input');
const boton = document.querySelector('.btn');

boton.addEventListener('click', function(){
    
    //console.log('Si Funcia el Boton');
    alert('Tu Nombre es: ' + nombre.value + " " + apellido.value + '\n' + 'Tu Dirección es: ' + direccion.value + '\n' + "Tu Ciudad es: " + ciudad.value + '\n' + "Tu Estado es: " + estado.value + '\n' + "Tu Código Postal es: " + cpostal.value + '\n' + 'Tu Archivo es: ' + archivo.value + '\n' + 'Tu Genero es: ' + genero.value);
});