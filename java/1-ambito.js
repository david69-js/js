'use strict'

function holamundo(texto){
    // esto seria un error, osea si se podria, pero no fuera de la funcion
    var luz = "Esto esta mal";    
    console.log(texto);
    console.log(numero);
    console.log(luz);
}

var texto = "Hola soy una variable global";
var numero = 12;
holamundo(texto);

//console.log(luz)


var num = parseInt(prompt("Cuantos numeros deseas introducir",0));
var contar;
var ope;

for(var i = 1; i <= num; i++ ){
    var pedir = parseInt(prompt("Introduce un numero"));
    ope = pedir %  2;
    if(ope == 0){
        console.log("Este numero"+pedir+" es par");
    }else if(ope ==1){
        console.log("Este numero"+pedir+" es impar");
    }
}