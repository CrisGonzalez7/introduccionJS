// OBJETOS

console.log('%cOBJETOS', 'color:#11e6e8');

const productoObj = {
    nombreObj: "Monitor",
    precio: 300,
    disponible: true
};

console.log(productoObj);
console.log('Nombre Producto: ', productoObj.nombreObj);
console.log('Precio Monitor: ', productoObj.precio);
console.log('Disponible: ', productoObj.disponible);

// Otra sintaxis
console.log('%cOtra sintaxis', 'color:yellow');
console.log('Precio: ', productoObj["precio"]);

// Anadiendo nueva propiedad

console.log('%cNueva Propiedad', 'color:yellow');
productoObj.imagen = 'imagen.jpg';
console.log(productoObj);

// Eliminar Propiedades

console.log('%cEliminar Propiedad Imagen', 'color:yellow');
delete productoObj.imagen;
console.log(productoObj);

// Forma anterior
// Crear variables desde propiedad

console.log('%cVariables desde propiedad - Antiguo', 'color:yellow');
const precioProducto = productoObj.precio;
const nombreProducto = productoObj.nombreObj;

console.log('Precio: ', precioProducto);
console.log('Nombre producto: ', nombreProducto);

// Destructuring

console.log('%cDestructuring', 'color:yellow');

const { precio, nombreObj } = productoObj;

console.log('Precio: ', precio);
console.log('Nombre producto: ', nombreObj);

// Congela objeto

console.log('%cObject Freeze', 'color:yellow');

Object.freeze(productoObj);

console.log('El objeto productoObj está congelado: ', Object.isFrozen(productoObj));

/* Al intentar añadir una nueva propiedad al objeto, lanza un error. 
Probar descomentando la siguiente linea */

// productoObj.imagen = 'imagen.jpg';

// Seal 

console.log('%cObject Seal', 'color:yellow');

const productoSeal = {
    nombreSeal: "Monitor",
    precio: 300,
    disponible: true
};

Object.seal(productoSeal);

/* Al intentar añadir una nueva propiedad al objeto, lanza un error. 
Probar descomentando la siguiente linea */

// productoObj.imagen = 'imagen.jpg';

console.log('El objeto productoSeal is Seal: ', Object.isSealed(productoSeal));

console.log('Producto sin modificar: ', productoSeal);

/* Al modificar una propiedad ya existente, no hay ningún problema */

productoSeal.precio = 'Nuevo Precio';

console.log('Producto modificado: ', productoSeal);

// Freeze no permite modificar nada
// Seal permite modificar los existentes


// Unir dos objetos 
console.log('%cUnir objetos', 'color:yellow');

const productoUnir = {
    nombreUnir: "Monitor",
    precio: 300,
    disponible: true
};

console.log('Objeto uno: ', productoUnir);

const medidasProducto = {
    peso: '1kg',
    pulgadas: '20 pulgadas',
};

console.log('Objeto dos: ', medidasProducto);

const productoUnido = {...productoUnir, ...medidasProducto };

console.log('Objetos unidos: ', productoUnido);

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

const arregloPrueba = ['Prueba de contenido', 10, true, 'Tipos de datos', null, 'Objeto', { nombre: 'Cris', ocupacion: 'Feliz' }, 'Otro arreglo', ['Arreglo interno', 1, 2, 3]];

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
console.log('añado un elemento a la posición "5"');
// Forma poco común
numeros[5] = 60;
console.table(numeros);
/* La forma anterior es poco común ya que si se utiliza en una posición ya existente modifica esa posición como podemos ver en el siguiente ejemplo (descomentar para ver):
numeros[2] = 70;
console.table(numeros);
*/

// Push
console.log('usando "push" añado elementos al final del arreglo');
numeros.push(80);
console.table(numeros);
console.log('añado múltiples elementos con "push"');
numeros.push(90, 100)
console.table(numeros);
/* Sin embargo, la forma anterior está dejando de usarse ya que se recomienda no modificar los arreglos originales */

// Unshift
console.log('usando "unshift" añado elementos al comienzo del arreglo');
numeros.unshift(-30, -20, -10);
console.table(numeros);

// Eliminar elementos del arreglo
console.log('%cEliminar elementos del arreglo', 'color:yellow');