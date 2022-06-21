//Variables:
recipiente = "Pedro";
recipiente = "Juan";
document.write( recipiente);

//Tipo de Datos:
string = 'Cadena de Texto';
number = 19;
booleano = false;

//Declarar Variables:
let numero;                 //Declarar variable (Se puede Modificar)
numero = 23;                //Inicializar Variable

document.write(' - ' + numero);

let numero1, numero2, numero3;
numero1 = 10;
numero2 = 15;
numero3 = 20;

document.write(' - ',numero1,' - ',numero2,' - ',numero3)     //Declarar Varias variables

var numeros = 141;

const my_nombre = "Jonatan"; //Constantes (Nunca Cambian)
const pi = 2.1416;

//undefined --> Variable que existe pero temporalmente no tiene valor
//null --> Variable vacia
//Nan --> Indica que el resultado de una operacion no es un número (5*'Juan'=NAN)


//Prompt
/*let name = prompt('Ingresa tu Nombre');
document.write(' - !Hola ' + name + '!');*/

//Operadores de Asignación y Arirmeticos:

let adicion = 10;
adicion += 5;
document.write(' - ', adicion);

let sustraccion = 10;
sustraccion -= 3;
document.write(' - ', sustraccion);

let multiplicacion = 10;
multiplicacion *= 2;
document.write(' - ', multiplicacion);

let division = 50;
division /= 10;
document.write(' - ', division);

let resto = 36;
resto %= 5;
document.write(' - ', resto);

let exponente = 5;
exponente **= 2;
document.write(' - ', exponente);

//Concatenacion:
saludo = ' - !Hola Juan¡, ';
pregunta = '¿Cómo estas?';
frase = saludo + pregunta;          //Con Strings
document.write(frase);

text1 = 'SoyTexto1';
text2 = 'SoyTexto2';
textos = ' - ' + text1.concat(text2);       //Metodo CONCAT
document.write(textos);

numero4 = 53;
numero5 = 8;
total = ' - ' + numero4 + numero5;      //Forzar el String
document.write(total);

nombre = 'Jonatan Raúl';
frase = ' - ' + `Soy ${nombre} y estoy caminando`;      //backtiks (alt + 96)
document.write(frase);

//Prueba 1
/*let prueba_num;
var prueba_num2;
if (prueba_num = null){
    document.write(prueba_num, ' Soy null ')
}else {
    document.write(prueba_num, ' Soy Undefined ')
}
if (prueba_num2 = undefined){
    document.write(prueba_num, ' Soy Undefined ')
} else{
    document.write(prueba_num, ' Soy null ')
}*/