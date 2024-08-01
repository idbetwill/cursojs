/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

// **********     Ejercicio 1     **********

console.log("**********     Ejercicio 1     **********");

function contador(text) {
  if (typeof text === "string") {
    return text.length;
  } else {
    console.log("Esta cadena no está definida o no es válida");
  }
}

console.log(contador("text"));

// **********     Solución tutor ejercicio 1     **********

//Función declarada (Mala práctica):
function characterCount(string = "") {
  if (!string) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${string}" tiene ${string.length} caracteres`);
  }
}

const characterCount2 = (string2 = "") =>
  !string2
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${string2}" tiene ${string2.length} caracteres`);

characterCount();
characterCount("Hola Mundo");
characterCount2();
characterCount2("Hola Mundo");

// **********     Ejercicio 2     **********

console.log("**********     Ejercicio 2     **********");

let string2 = new String("Hola Mundo");

function buscador(string2, num) {
  return string2.substring(0, num);
}

console.log(buscador(string2, 5));

// **********     Solución tutor ejercicio 2     **********

const cutText = (stringR = "", length = undefined) => {
  !stringR
    ? console.warn("No ingresaste el texto")
    : length === undefined
    ? console.warn("No ingresaste la logitud para recortar el texto")
    : console.info(stringR.slice(0, length));
};

cutText("Hola Mundo", 6);
cutText();
cutText("Hola Mundo");
cutText("", 5);

/* **********     Ejercicio 3     ********** */

console.log("**********     Ejercicio 3     **********");

let stringToArray = new String(
  "Hola mundo, soy una cadena de texto (string) que se conviritó en Array"
);

function convertidor(stringToArray, separador) {
  return stringToArray.split(separador);
}

console.log(convertidor(stringToArray, " "));

// **********     Solución tutor ejercicio 3     **********

const string2Array = (stringP = "", separador = undefined) => {
  !stringP
    ? console.warn("No ingresaste el texto de la cadena")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(stringP.split(separador));
};

string2Array("Hola mundo, soy una cadena de texto (string) que se conviritó en Array", " ");
string2Array("Mes,Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
string2Array();
string2Array("Hola Mundo");
string2Array("", "-");

/* **********     Ejercicio 4     ********** */

console.log("**********     Ejercicio 4     **********");

function repetidor(textR) {
  return textR.repeat(3);
}

console.log(repetidor("Hola Mundo "));

// **********     Solución tutor ejercicio 4     **********

const repeatText = (textRe = "", numRe = undefined) => {
  if (!textRe) return console.warn("No ingresaste el texto a repetir");
  if (numRe === undefined) console.warn("No ingresaste el número para repetir");
  if (numRe === 0) console.error("El número de veces no puede ser 0");
  if (Math.sign(numRe) === -1) console.warn("El número de veces no puede ser negativo");

  for (let i = 1; i <= numRe; i++) console.log(`${textRe}, ${i}`);
};

repeatText("Hola Mundo", 3);
repeatText("Hola Mundo", 0);
repeatText("Hola Mundo", -4);
repeatText("", -4);
repeatText("Hola Mundo");

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

/* **********     Ejercicio 5     ********** */
