'use strict'
/*
1. Pida 6 numeros y los meta en una array
2. Mostrar todo el arrary, el el cuerpo de la pantalla y en consola
3. Ordenarlo y mostarlo
4. Invertir su orden y mostarlo
5. Mostar cuantos elementos tiene la array 
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encontro y su indice. 
*/

function mostrar(elementos, textoCostum= ""){
    document.write("<h1>Contenido array "+textoCostum+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, )=> {
           document.write("<li>"+elemento+"</li>")
       
    });
    document.write("</ul>");
   

}

var numeros = new Array(6); 

 for(var i = 0; i <= 5; i++)[
        numeros[i] = parseInt(prompt("Introduce un numero: ",0))

 ]

// mostar en la consola
 console.log(numeros);


 // mostar en el cuerpo de la pantalla

mostrar(numeros);

// mosrtar odenado 
numeros.sort(function (a,b){ return a-b});
mostrar(numeros,' ordenado');
// invertir y mostrar

numeros.reverse();
mostrar(numeros, 'revertido');

// numero de elemntos de la array 

document.write("<h1>La cantidad de elementos es: "+numeros.length+" </h1>")

// Buscar el valor introducido por el usuario
var buscar1 = parseInt(prompt("Introduce un numero para buscar ",0 ))

var pocision = numeros.indexOf(buscar1);

if (pocision && pocision != -1) {
    document.write("<h1>Encontrado </h1>")   
    document.write("<h1>La posicion de la busqueda es: "+pocision+" </h1>")
} else {
    document.write("<h1>No encontrado"+pocision+" </h1>")
}