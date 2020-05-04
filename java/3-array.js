'use strict'
alert("array aca vamos");

var nombre ='David alv';
var nombres = ['luis', 'Adolfo','lucia', 'Ricardo', 23,false];

var lenguajes = new Array('PHP','java','maisol','C#','c','pascal');

//asi se busca un elemento de la array con un numero 
//console.log(nombres[3]);

// asi se sabe cuantos elementos tenemos agregados en la array
//console.log(nombres.length);


// asi se realiza con una condicional  
/*
var elemento = parseInt(prompt("Que nombre deseas adquirir", 0));

if (elemento <= nombres.length ) {
    document.write(nombres[elemento]);
    
} else {
    alert("Introduce un numero menor o igual a : "+nombres.length);
}
*/

// Realizar una busqueda con un bucle for o imprimir todos los elementos de la array

document.write("<h1>Lengujes de programacion</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i] +"</li>");
}
// la manera mas elegante de realizarlo es foreach  / se eealiza de una manera mas limpia y mas simple
lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>"+indice+" - "+elemento+"</li>");
});

document.write("<ul>");
*/
// otra forma para recorrer una arrar con el for in 

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguaje+" - "+lenguajes[lenguaje]+"</li>");       
}

document.write("<ul>");

// buscar un elemento de una array 

var busqueda = lengujes.find(lenguajes => lenguaje == "pascal");
console.log(busqueda);


function getRamdonInt(max, min){
    return Math.floor(Math.random() *(max - min ))+ min;
    }
    let array= [];
    let suma =0;
    
    for(let i = 1; i < 10; i++){
            array.push(getRamdonInt(0,9));
           
    }
    
    console.log(array)