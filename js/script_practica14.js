/*var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  wrapper.innerHTML = '<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#check-circle-fill"/></svg>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Genial, activaste este mensaje de alerta.', 'warning')
  })
}*/

const alerta = document.querySelector('#Mesage-Alert');
const boton = document.querySelector('#Alert-Btn');
const icono  = document.querySelector('#icon');
const simbolo = document.querySelector('#Symbol')
const ruta = document.querySelector('#path');

//Añadir Funcionalidad al Botón
boton.addEventListener("click",function(){
  alert("Has Dado click en el boton!!", "warning")
});

function alert(message, type) {
  var wrapper = document.createElement('div')
  var icon = document.createElement('svg')
  var symb = document.createElement('symbol')
  var pat = document.createElement('path')

  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"></svg>'
  symb.innerHTML = '<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"></symbol>'
  pat.innerHTML = '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>'


  alerta.append(wrapper)
  icono.append(icon)
  simbolo.append(symb)
  ruta.append(pat)
}