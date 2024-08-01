/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

/* **********     Ejercicio 1     ********** */

let string = new String("Hola Mundo");
let object = {
  nombre: "Pedro",
  apellido: "Gonzalez",
  password: "kjknNKI*123",
};

let array = ["a", "e", "i", "o", "u"];

let number = 3226789988;

let contarString = string.length;

function contador() {
  if (" " || contarString) {
    console.log(contarString);
  } else {
    console.log("Esta cadena no está definida o es inválida");
  }
}

contador();

/* **********     Ejercicio 2     ********** */

let string2 = new String("Hola Mundo");

function buscador(string2, num) {
  return string2.substring(0, num);
}

console.log(buscador(string2, 5));

/* **********     Ejercicio 3     ********** */

let stringToArray = new String(
  "Hola mundo, soy una cadena de texto (string) que se conviritó en Array"
);

function convertidor(stringToArray, separador) {
  return stringToArray.split(separador);
}

console.log(convertidor(stringToArray, " "));

/* **********     Ejercicio 4     ********** */
