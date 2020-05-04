'use strict'

window.addEventListener('load', ()=>{

     /*
    // seleciona un elemento por Id
function cambiar(fondo){
    micaja.style.background= fondo;
}
var micaja = document.querySelector('#micaja');
    micaja.style.background = 'red';
    micaja.style.color = 'green';
    micaja.style.fontSize= '40px'
    micaja.style.padding= '30px';
    micaja.className= "que pedo perras";

console.log(micaja);

var losclas = document.querySelector('.amarillo').innerHTML= "Hola soy otra edicion";
console.log(losclas);

// document.getElementsByTagName seleciona elementos por su etiqueta 
var losdiv = document.getElementsByTagName('div');
console.log(losdiv);

// recorer una array y agregarlo al cuerpo de la pagina
var hr = document.createElement('hr');
var seccion = document.querySelector('#miseccion');
var indice ;
for(indice in losdiv){
    if(typeof losdiv[indice].innerHTML == 'string'){
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(losdiv[indice].innerHTML);
        parrafo.append(texto);
        seccion.append(parrafo); 
    }

}seccion.append(hr);

// buscar los elementos por class
var clas = document.getElementsByClassName('rojo');
    console.log(clas)
var i;
    for(i in clas){
        if(clas[i].className == 'rojo'){
            clas[i].style.background= 'red';

        }
  
    }

    function nombreClas(cambiar){
    clas[1].innerHTML=cambiar; 
}

// Ahora veremos los Bom 
// podemos ver cuanto mide la pantalla 
function tama(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location);
}

tama();
console.log("***************");

function tama2(){
console.log(screen.height);
console.log(screen.width);
}

tama2();
// Con esta funcion nos podremos redirigir a una nueva ventana 

function nuevaPa(url){
    window.location= url;
}

// Con esta funcion nos redirigiremos a una minima pantalla flotante 

function pagFlot(url2){
    window.open(url2,"","height= 400, width=300px");
}


// Ahora veremos los eventos  // envento Click



function colorBot(){
    var bg = boton.style.background;
    if(bg == 'red'){
        boton.style.background= 'yellow';
    }else{
        boton.style.background= 'red';
    }
    boton.style.padding = '20px';
    boton.style.border= '5px solid #ccc';
    return true;
}
// Pero para mantener el codigo limpio necesitamos el adevenListener 
var boton = document.querySelector('#boton');
boton.addEventListener('click', function(){
      colorBot();  
});

// mouse over
boton.addEventListener('mouseover', function(){
        boton.style.background='green';
});
// mouse out
boton.addEventListener('mouseout', function(){
    boton.style.background="#ccc";
});

// Eventos del teclado 

// focus
var campo = document.querySelector('#campos');
campo.addEventListener('focus', function(){
    console.log('[focus]Estas dentro del imput');
});
// blur
var campo = document.querySelector('#campos');
campo.addEventListener('blur', function(){
    console.log('[blur]Saliste del imput');
});

// keydow 
var campo = document.querySelector('#campos');
campo.addEventListener('keydown', function(event){
    console.log('Estas pulsando la tecla = ', String.fromCharCode(event.keyCode));
});


//keypress
var campo = document.querySelector('#campos');
campo.addEventListener('keypress', function(event){
    console.log('Tecla precionada = ', String.fromCharCode(event.keyCode));
});


// keyup
var campo = document.querySelector('#campos');
campo.addEventListener('keyup', function(event){
    console.log('Pulsaste la tecla = ', String.fromCharCode(event.keyCode));
});


// ahora veremos el set interval 
function intervalo(){
var tiempo = setInterval(function(){
   
     console.log('Set Interval ejecutado');
        var h1 = document.querySelector('#titulo');
            var   h12=  h1.style.fontSize;  
            if(h12 == "30px"){
            h1.style.fontSize = "10px";
        }else{
            h1.style.fontSize = "30px";
        }
       
},1000);
 return tiempo;
}

var tiempo = intervalo(); 

    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function(){
        alert("Has detenido el bucle");      
        clearInterval(tiempo);  
    });
    var start = document.querySelector("#start");
    start.addEventListener("click", function(){
        alert("Has reanudado el bucle");      
        intervalo();
    });

    // Ejercicio de todos los eventos

   

    */



      

});


