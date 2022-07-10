let email = document.querySelector('#camp-email');
let password = document.querySelector('#camp-password');
let direccion = document.querySelector('#camp-address');
let direccion2 = document.querySelector('#camp-address2');
let ciudad = document.querySelector('#camp-city');
let estado = document.querySelector('#camp-list');
let codPostal = document.querySelector('#camp-zip');
let terminos = document.querySelector('#camp-check');
let botonSub = document.querySelector('.btn');

botonSub.addEventListener("click", function(){
    console.log('Si Funcia el Boton');

    if(terminos.value == 'Acept'){
        terminos.value = 'Acepto';
    }else{
        terminos.value = 'No Acepto';
    }

    //Obtener los valores de los campos de texto
    alert('Tu Email es: ' + email.value + '\n' + 'Tu Contaseña es: ' + password.value + '\n' + 'Tu Dirección es: ' + direccion.value + ' ' + direccion2.value + " " + '\n' + 'Tu cuidad es: ' + ciudad.value + '\n' + 'Tu Estado es: ' + estado.value + '\n' + 'Tu Código Postal es: ' + codPostal.value + " " + '\n' + 'Usted ' + terminos.value + ' que recordemos su usuario');
    
});