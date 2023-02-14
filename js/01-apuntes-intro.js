// Ejecucion estricta: "use strict";
"use strict";

// Variables

// let y var son similares
// const para valores fijos y no se pude inicializar una variable sin valor

// CADENAS DE TEXTO
console.log('%cCADENAS DE TEXTO', 'color:#11e6e8');

const producto = "Monitor de 20 pulgadas";
const producto1 = 'Monitor de 20 pulgadas';
const producto2 = String('Monitor de 20 pulgadas');
const producto3 = new String('Monitor de 20 pulgadas');
const producto4 = "Monitor de 20\"";

//Impresion de variables
console.log('%cImpresión de variables', 'color:yellow');
console.log(producto);
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

// Tipo de variables
console.log('%cTipo de variables', 'color:yellow');
console.log(typeof producto);
console.log(typeof producto1);
console.log(typeof producto2);
console.log(typeof producto3);
console.log(typeof producto4);

//Extensión del texto de las variables
const tweet = '\"Aprendiendo JavaScript con Juan Pablo de la Torre\"'

console.log('%cExtensión texto de variables', 'color:yellow');
console.log('tweet:', tweet);
console.log('Extensión del texto: ', tweet.length, ' caracteres');

// En qué posición se encuentra un elemento
console.log('%cPosición elemento', 'color:yellow');
console.log('El elemento \"JavaScript\" se encuentra en la posición ', tweet.indexOf('JavaScript'), ' de la cadena de texto');

//Cuando no encuentra al elemento
console.log('%cCuando no encuentra al elemento', 'color:yellow');
console.log('Cuando el elemento no es encontrado lanza el siguiente dato: ', tweet.indexOf('tablet'), ' lo cual indica que ese elemento no se encuentra donde se está buscando');

// Includes retorna True o False
console.log('%cIncludes', 'color:yellow');
console.log('¿Se encuentra el elemento \"JavaScript\" en la cadena de texto \"tweet\"?', tweet.includes('JavaScript'));
console.log('¿Se encuentra el elemento \"tablet\" en la cadena de texto \"tweet\"?', tweet.includes('tablet'));

// Template String - String Literals

console.log('%cTEMPLATE STRING', 'color:#11e6e8');

const nombre = 'Juan';
const email = 'correo@correo.com';

console.log(`Nombre Cliente: ${nombre} Email: ${email}`);

// NUMEROS
console.log('%cNUMEROS', 'color:#11e6e8');

const numero1 = 100;
const numero2 = 200;

console.log(numero1);
console.log(numero2);

console.log('La suma de ambos números es: ', numero1 + numero2);
console.log('La resta de ambos números es: ', numero1 - numero2);
console.log('La multiplicación de ambos números es: ', numero1 * numero2);
console.log('La división de ambos números es: ', numero1 / numero2);
console.log('El módulo es: ', numero1 % numero2);

// Objeto Math
// En la consola se puede poner la palabra "window" y saldrán las funciones de JavaScript
// Se puede poner el comando "window.Math.random()" y esto lanzará un número aleatorio, también se puede poner solo "Math.random()"

const pi = Math.PI; //Pi
const round = Math.round(2.5); //Redondea 
const ceil = Math.ceil(2.1); //Redondea siempre hacia arriba
const floor = Math.floor(2.9); //Redondea siempre hacia abajo
const sqrt = Math.sqrt(144); //Raiz cuadrada
const abs = Math.abs(-200); //Convierte un número negativo en positivo
const min = Math.min(3, 5, 1, 8, 2, 10); //El número mínimo de un listado
const max = Math.max(3, 5, 1, 8, 2, 10); //el número máximo de un listado
const random = Math.random(); //Número aleatorio
const floorRandom = Math.floor(Math.random() * 30); //Combinación de funciones

console.log('%cMath', 'color:yellow');
console.log('pi: ', pi);
console.log('round 2.5: ', round);
console.log('ceil 2.1: ', ceil);
console.log('floor 2.9: ', floor);
console.log('sqrt 144: ', sqrt);
console.log('abs -200: ', abs);
console.log('min 3, 5, 1, 8, 2, 10: ', min);
console.log('max 3, 5, 1, 8, 2, 10: ', max);
console.log('random: ', random);
console.log('Math.floor(Math.random() * 30) = ', floorRandom);

//El orden de las operaciones es igual que en matemáticas

//Incrementos
console.log('%cIncrementos', 'color:yellow');

let puntaje = 10;

// Incremento en 1++

puntaje++; //10
++puntaje; //12

puntaje--; //11

console.log(--puntaje); //10

puntaje += 10;

console.log(puntaje);

// BOOLEANS

console.log('%cBOOLEANS', 'color:#11e6e8');

const boolean1 = true;
const boolean2 = false;

console.log(boolean1);
console.log(typeof boolean1);
console.log(boolean2);
console.log(typeof boolean2);