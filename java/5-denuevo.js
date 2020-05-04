'use strict'
/*
2) Crea un array de números donde le indicamos por teclado el tamaño del array, rellenaremos
 el array con números aleatorios entre 0 y 9, al final muestra por pantalla el valor de cada 
 posición y la suma de todos los valores. Haz un método para rellenar el array (que tenga como
 parámetros los números entre los que tenga que generar), para mostrar el contenido y la 
 suma del array y un método privado para generar número aleatorio (lo puedes usar para otros ejercicios) 
//

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

var array = []
var cantiad = parseInt(prompt('Cuantos numeros aleatorios queries?',0));
for(var i = 1; i <=cantiad; i++){
    array.push(aleatorio(1,100));
}
console.log(array);
*/

//var introducir =(prompt('Escriba un color',)); 

//
/*
var array = [1,2,3];
var array2 = [1,2,4];


var array3= array.concat(array2);
array3.sort(function (a,b){ return a-b});
console.log(array3);



var ris = array2.join();
var ros = array.join();
console.log(array2);
console.log(array);


var texto = ris,ros;
var busqueda1= texto.match(/1,2/gi);
console.log(busqueda1)

var texto1 = prompt("Ingrese numeros");
var texto2 = prompt("Ingrese numeros");


var busqueda1 = texto1.split(",");
console.log(busqueda1);
var busqueda2 = texto2.split(",");
console.log(busqueda2);
var r = [];

if(busqueda2.length ==busqueda1.length){

var nuevo = busqueda1.map((x,i)=> (+x + +busqueda2[i]) + "");
console.log(nuevo);
      
        
}else {
    console.log("Contienen diferente cantidad de elementos");
}
*/

var arr = [1, 2, 3];
var max = Math.max(...arr)

var arr2 = [312,34,21]
var max2 =Math.max(...arr2);
if(max>max2){
    console.log(max);
}else if(max2>max){
    console.log(max2);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}

var arr = [1, 2, 3];
var min = Math.min(...arr)
console.log(min);


function par(ara=[1,2,4,5]){
    console.log(ara)
}

par();

