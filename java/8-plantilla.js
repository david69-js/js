'use strict'
// Realizar una plantilla de texto

var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");

//esto no es una plantilla  
//var texto = "Mi nombre es : "+ nombre+" <br/>Mi apellido es: "+apellido;

var texto = `
        <h1>Hola que tal</h1>
        <h3>Mi nombre es: ${nombre}</h3>
        <h3>Mi apellido es: ${apellido}</h3>
        
`;

document.write(texto);
/*
var pedir = parseInt(prompt("Introduce una cantidad: ", 0));
var acumulador=0;
var ris= 0;
var mayor, menor;
for(var i = 1; i <= 10; i++){
    
    var pedir = parseInt(prompt("Introduce una cantidad: ", 0));
        ris = pedir %2;
        if (ris == 0) {

            console.log("El numero :"+pedir+ " es par.");
        } else if(ris == 1){

            console.log("El numero :"+pedir+" es impar.");
        }
        acumulador=acumulador+pedir;
       if (i==1) {
            menor = pedir;
            mayor = pedir;
           
       } else if(pedir > mayor)  {
        mayor = pedir;
       }else if(pedir < menor){
        menor = pedir;
       }
}

console.log("La suma de todo los numeros es ;"+acumulador);
console.log("El promedio es;"+(acumulador/10));
console.log('El mumero mayor es ' +mayor);
console.log('El mumero menor es ' +menor);
*/

