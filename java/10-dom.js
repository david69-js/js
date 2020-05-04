'use strict'
function cambiaColor(color){
    caja.style.color = color;
}
function cambiafondo(fondo){
    caja.style.background = fondo;
}

// Para conseguir elementos con id concreto

//La manera convencional de seleccionar un id   / var caja = document.getElementById("micaja");
// la manera mas facil y elegante de hacerlo /
var caja = document.querySelector("#micaja");



///reglas de css, se pueden utilizar en el mod, atraves de un <div id ="cualquierCosa">Hola soy una lo que sea</div>
caja.innerHTML = "Hola buenas tardes desde JS";
caja.style.background = "red";
caja.style.padding = "15px";
caja.style.color= "yellow";
caja.className = "Hola perras";


// Conseguir elementos por su etiqueta 
var todoslosDiv = document.getElementsByTagName('div');// consigue elementos por su etiqueta

/*


var contenido = todoslosDiv[3];

contenido.innerHTML = "Otro texto del elemento tres";// innerHTML sirve para mostrar el contenido y para editarlo
contenido.style.background = "red";
*/
var valor ;
var seccion = document.querySelector('#miseccion');
var hr = document.createElement("hr");
// recorrer elemntos con el for in
for(valor in todoslosDiv){    

    if( typeof todoslosDiv[valor].innerHTML == 'string' ){
        
        var parrafo = document.createElement("p");// crea un objetos como p, h1, 
    var texto = document.createTextNode(todoslosDiv[valor].innerHTML);//crea texto de la arrray 
    parrafo.append (texto);// despues de 
    seccion.append(parrafo);
    }
}seccion.append(hr);

// Conseguir elementos (getElementsByClassName)por su clase // conseguir elementos con y meterlos en una array

var losdiv = document.getElementsByClassName('rojo');
var divaAmarillo = document.getElementsByClassName('amarillo');

divaAmarillo[0].style.background ="yellow";


var div;
for(div in losdiv){
    if( losdiv[div].className == 'rojo'){
        console.log(losdiv[div]);    
        losdiv[div].style.background="green";
    }
}
console.log(losdiv);


// Capturar un Id con el query selector // recomendable solo cuando es una
var enca = document.querySelector('#encabezado');
enca.style.color = "green";

console.log(enca);

var todo = document.querySelectorAll('div.rojo','div.amarillo');
console.log(todo);
