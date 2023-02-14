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