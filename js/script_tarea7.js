console.log("Todo Chido!");

let nombre = document.querySelector('#exampleInputText1');
let apellido = document.querySelector('#exampleInputText2');
let correo = document.querySelector('#exampleInputEmail1');
const password = document.querySelector('#exampleInputPassword1');
const confirpassword = document.querySelector('#exampleInputPassword2');
let botonReg = document.querySelector('.btn');
let alerta = document.querySelector('#msg-alert');

botonReg.addEventListener("click", function(){
    console.log('Si Funcia el Boton');
    //Obtener los valores de los campos de texto
    //alert('Tu Nombre es: ' + nombre.value + " " + apellido.value + '\n' + 'Tu correo es: ' + correo.value + '\n' + 'Tu Contaseña es: ' + password.value + " " + confirpassword.value, "info");
    //console.log(password.value + " " + confirpassword.value);

    if(password.value == confirpassword.value){

        alert('¡Ha Sido Registrado con Éxito!', "info");
        
    } else{
        
        alert('¡No Coincide La Contaseña!', "primary");

    }
    
});

function alert(message, type){
    alerta.innerHTML = '<div class="mb-4 alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';  
};