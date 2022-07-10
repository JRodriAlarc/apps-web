const run = document.querySelector('#campo-run');
const nombre = document.querySelector('#campo-nombre');
const fecha = document.querySelector('#campo-fecha');
const email = document.querySelector('#campo-email');
const telefono = document.querySelector('#campo-tel');
const direccion = document.querySelector('#campo-direccion');
const ciudad = document.querySelector('#campo-ciudad');
const comuna = document.querySelector('#campo-comuna');
const auto = document.querySelector('#campo-auto');
const boton = document.querySelector('.btn-primary');

boton.addEventListener('click', function(){
    
    //console.log('Si Funcia el Boton');
    alert('Tu Nombre es: ' + nombre.value + " " + '\n' + 'Tu Run es: ' + run.value + '\n' + "Tu Fecha de Nacimiento es: " + fecha.value + '\n' + "Tu Email es: " + email.value + '\n' + "Tu Teléfono es: " + telefono.value + '\n' + 'Tu Dirección es: ' + direccion.value + '\n' + 'Tu Ciudad es: ' + ciudad.value + '\n' + "Tu comuna es: " + comuna.value + '\n' + "Tu Auto es: " + auto.value);
});