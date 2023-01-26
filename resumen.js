// Lectura de inputs del usuario
let nombre = prompt("Ingrese su Nombre:");
console.log("Hola " + nombre);

// Mostrar mensajes al usuario
alert("Hola Mundo");

// Declaración de variables
let numero = 5; // variable de tipo número
const ciudad = "Medellin"; // variable de tipo cadena, se utiliza const para declarar variables constantes
let verdadero = true; // variable de tipo booleano
let decimal = 3.14; // variable de tipo decimal
let arreglo = [1, 2, 3]; // variable de tipo arreglo
let objeto = {nombre: "Andres", edad: 37}; // variable de tipo objeto

// Operadores matemáticos básicos
let resultado = numero + 2; // suma
console.log(resultado); // imprimiría 7 en la consola
let resta = numero - 2; // resta
console.log(resta); // imprimiría 3 en la consola
let multiplicacion = numero * 2; // multiplicacion
console.log(multiplicacion); // imprimiría 10 en la consola
let division = numero / 2; // division
console.log(division); // imprimiría 2.5 en la consola
let modulo = numero % 2; // modulo
console.log(modulo); // imprimiría 1 en la consola

// Operadores lógicos
let esMayor = numero > 3; // devuelve true
let esMenor = numero < 3; // devuelve false
let esMayorIgual = numero >= 5; // devuelve true
let esMenorIgual = numero <= 5; // devuelve true
let esIgual = numero == 5; // devuelve true
let esDiferente = numero != 4; // devuelve true

console.log(esMayor && esMenor); // devuelve false
console.log(esMayor || esMenor); // devuelve true
console.log(!esMayor); // devuelve false

// Condicionales
if (numero > 3) {
    console.log("El número es mayor a 3");
    } else if (numero == 3){
    console.log("El numero es igual a 3");
    } else {
    console.log("El número es menor o igual a 3");
}

// Switch
let diaSemana = "lunes";
switch (diaSemana) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    default:
        console.log("No sé qué día es hoy");
}

// Bucle for
for (let i = 0; i < 5; i++) {
    console.log("Contando..." + i);
}

//Arrays
let frutas = ["manzana", "naranja", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Bucle while
let contador = 0;
while (contador < 5) {
    console.log("Contando..." + contador);
    contador++;
}

// Bucle do-while
let i = 0;
do {
    console.log("Contando..." + i);
    i++;
} while (i < 5);

// Funciones
function saludar(nombre) {
    console.log("Hola " + nombre);
}
  saludar("Juan"); // imprimiría "Hola Juan" en la consola

// Objetos
let persona = {
    nombre: "Andres",
    edad: 25
};
  console.log(persona.nombre); // imprimiría "Juan" en la consola

  // Arrays
let frutas = ["manzana", "naranja", "mango"];
  console.log(frutas[1]); // imprimiría "banana" en la consola
