// Arreglos o Arrays

console.log('%cARRAYS', 'color:#11e6e8');

// Numeros
console.log('%cArray numeros', 'color:yellow');

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);

// Meses
console.log('%cArray meses', 'color:yellow');

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

console.log(meses);
console.table(meses);

// Arreglo de prueba
console.log('%cArreglo de prueba', 'color:yellow');

const arregloPrueba = ['Prueba de contenido', 10, true, 'Tipos de datos', null, 'Objeto', { nombre: 'Nombre', ocupacion: 'Ocupación' }, 'Otro arreglo', ['Arreglo interno', 1, 2, 3]];

console.log(arregloPrueba);
console.table(arregloPrueba);

// Acceder a los valores de un arreglo

console.log('%cAcceder a los valores de un arreglo', 'color:yellow');
console.log('Los arreglos parten en la posición 0');
console.log(numeros);
console.log('Si imprimo el valor de la posición "3" se imprimirá el "40"');
console.log(numeros[3]);
console.log('Si imprimo una posición inexistente, me dice que no está definida');
console.log(numeros[100]);

// Conocer la extensión de un arreglo
console.log('%cConocer la extensión de un arreglo', 'color:yellow');
console.log('Extensión del arreglo "meses"');
console.log(meses.length);

// Arreglo vacío
console.log('%cSi es un arreglo vacío, la extensión dice "0"', 'color:yellow');

const arregloVacio = [];

console.log(arregloVacio.length);

// Acceder a todos los valores del arreglo con un iterador
console.log('%cAcceder a todos los valores del arreglo con un iterador', 'color:yellow');
console.log(meses);
console.log('Imprimiendo "meses" con un iterador');

meses.forEach(function(mes) { console.log(mes) });

// Añadiendo elementos al arreglo

console.log('%cAñadiendo elementos al arreglo "numeros"', 'color:yellow');
console.table(numeros);
console.log('Añado un elemento a la posición "5"');
// Forma poco común
numeros[5] = 60;
console.table(numeros);
/* La forma anterior es poco común ya que si se utiliza en una posición ya existente modifica esa posición como podemos ver en el siguiente ejemplo (descomentar para ver): */
/*
numeros[2] = 70;
console.table(numeros);
*/

// Push
console.log('Usando "push" añado elementos al final del arreglo');
numeros.push(80);
console.table(numeros);
console.log('Añado múltiples elementos con "push"');
numeros.push(90, 100)
console.table(numeros);
/* Sin embargo, la forma anterior está dejando de usarse ya que se recomienda no modificar los arreglos originales */

// Unshift
console.log('Usando "unshift" añado elementos al comienzo del arreglo');
numeros.unshift(-30, -20, -10);
console.table(numeros);

// Eliminar elementos del arreglo
console.log('%cEliminar elementos del arreglo "meses"', 'color:yellow');
console.table(meses);
console.log('Usando "pop" elimina el último elemento');
meses.pop();
console.table(meses);
console.log('Usando "shift" elimina el primer elemento');
meses.shift();
console.table(meses);

// Splice
console.log('Eliminando elementos con el método "splice"');
const arregloSplice = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
console.table(arregloSplice);
// El método Splice toma dos valores, el primero es la posición del elemento que se desea eliminar basado en su índice y el segundo valor es la cantidad de elementos que se desea eliminar a partir de ahí
arregloSplice.splice(1, 5);
console.table(arregloSplice);

/* La desventaja de todos los métodos antes mencionados es que modifican el arreglo original y últimamente la tendencia es no modificar los arreglos originales */

// Rest Operator o Spread Operator
console.log('%cRest Operator o Spread Operator', 'color:yellow');
console.table(meses);
console.log('Añado elementos al final del arreglo de "meses" con un nuevo arreglo');
const nuevoMeses = [...meses, 'Mayo', 'Junio', 'Julio'];
console.table(nuevoMeses);
console.log('Añado elementos al comienzo del arreglo de "nuevoMeses" con un nuevo arreglo');
const mesesInicio = ['Enero', ...nuevoMeses];
console.table(mesesInicio);

// ARRAYS METHODS
console.log('%cARRAYS METHODS', 'color:#11e6e8');

// Arreglo con Objetos
console.log('%cArreglo con Objetos', 'color:yellow');

const carrito = [
    { nombre: 'Plancha', precio: '21 000' },
    { nombre: 'Monitor', precio: '100 000' },
    { nombre: 'Celular', precio: '250 000' },
    { nombre: 'Audifonos', precio: '12 000' },
    { nombre: 'Teclado', precio: '25 000' },
]

console.table(carrito);

// forEach
const arregloSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

arregloSemana.forEach(function(dia) {
    console.log(dia);
})

arregloSemana.forEach(function(dia) {
    if (dia == 'Terça') {
        console.log('Terça si está en arregloSemana');
    }
})

// Includes
console.log('con el metodo "includes" puedo saber si un elemento se encuentra en el arreglo');

console.log('Buscando un elemento existente');
const existeTerca = arregloSemana.includes('Terça');
console.log(existeTerca);

console.log('Buscando un elemento NO existente');
const noExiste = arregloSemana.includes('Hola');
console.log(noExiste);

/* No es una buena opción para arreglos con objetos */