'use strict'
/*
function suma(n1,n2){
    console.log(n1+n2);
    console.log(n1-n2);
    console.log(n1*n2);
    console.log("***************")

    return 'Hola, yo realizo las operaciones';
}
suma(23,3);
*/

var texto = "Que onda mucha onda";
var numero = 23;
var texto2 = "ya vine  de nuevo";

var dato = numero.toString();// asi se cambia un numero a un texto 
    dato = texto.toUpperCase();// este metodo se ocupa para hacer que cada caracter se vuela mayusculas up= arriba
    dato = texto2.toLowerCase();//este metodo se encarga de convertir cada caracter en minuscula lower=abajo 


console.log(dato);

// calcular longitud 
var nombre = 'Santos David'
console.log(nombre.length);

// concatenar textos

//var textotal = texto+" "+texto2;
var textotal = texto.concat(" "+ texto2);
console.log(textotal);

// busqueda de texto
var busqueda = texto.indexOf("onda");
console.log(busqueda);

// busca la ultima coincidencia del texto a buscar 
var busqueda2 = texto.lastIndexOf("onda");
console.log(busqueda2);

// busca la palabar y la mete a una array // tambien la otra opcion de encontrar todas las coincidencias /?/gi
var busqueda3 = texto.match(/onda/gi);
console.log(busqueda3);

// sirve para verificar si la palabra en realiad existe/ true si existe, /false si no existe 
var busqueda4 = texto.includes("mucha");
console.log(busqueda4);

//sirver para reemplazar palabras 
var busqueda5 = texto.replace("mucha", "jovenes");
console.log(busqueda5);

//sirver para cortar  palabras 
var busqueda6 = texto.splice(4);
console.log(busqueda6);

//realiza una array con todas las palabras
var busqueda7 = texto.split(" ");
console.log(busqueda7);

// trim sirve para cortar el espacio de por adelante y detras 

//


var nombres = ['luis', 'Adolfo','lucia', 'Ricardo', 23,false];

var lenguajes = new Array('PHP','java','maisol','C#','c','pascal');


for(let lenguaje in lenguajes){// for in
    document.write("<li>"+lenguaje+" - "+lenguajes[lenguaje]+"</li>");       
}

document.write("<ul>");

// Realizar una busqueda con un bucle for o imprimir todos los elementos de la array

document.write("<h1>Lengujes de programacion</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){              // for normal 
    document.write("<li>"+lenguajes[i] +"</li>");
}
// la manera mas elegante de realizarlo es foreach  / se eealiza de una manera mas limpia y mas simple


lenguajes.forEach((elemento, indice, arr)=>{                // forEach
    console.log(arr);
    document.write("<li>"+indice+" - "+elemento+"</li>");
});

document.write("<ul>");
*/