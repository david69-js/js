'use strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[1]);
var numero2 = parseFloat(params[2]);

var plantilla = `
La suma de los parametros es : ${numero1 + numero2}
La resta de los parametros es : ${numero1 - numero2}
La multiplicacion de los parametros es : ${numero1 * numero2}
La division de los parametros es : ${numero1 / numero2}
`;

console.log(plantilla);

console.log('Hola mundo con node js');