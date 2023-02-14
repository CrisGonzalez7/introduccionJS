// Ejecucion estricta: "use strict";
"use strict";

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