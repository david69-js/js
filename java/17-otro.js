'use strict'
window.addEventListener('load', function(){
console.log('Ya esta cargada patron');

var formulario = document.querySelector('#formulario');
var dashed = document.querySelector('.dashed');
// escondemos el bloque
dashed.style.display = "none";

// La reaccion que tendra el boton 
formulario.addEventListener('submit', function(){
    console.log('Evento capturado');
    
    
    var nombre= document.querySelector('#nombre').value;
    var apellido= document.querySelector('#apellido').value;
    var edad= parseInt(document.querySelector('#edad').value);

    console.log(nombre,apellido,edad);

    if(nombre== null || nombre.length ==0 ||  /^\s+$/.test(nombre)){
        alert('Al parecer ha habido un error');
        document.querySelector("#error1").innerHTML ="El nombre no es valido";
        return false;
    }else{
        document.querySelector("#error1").style.display ="none"; 
    }   
     if(apellido == null || apellido.length == 0 ||  /^\s+$/.test(apellido)){
        alert('Al parecer ha habido un error');
        document.querySelector("#error2").innerHTML ="El apellido no es valido";
        return false;
    }else{
        document.querySelector("#error2").style.display ="none"; 
    }
    if(edad == null || edad <= 0 || isNaN(edad)){
        alert('Al parecer ha habido un error');
        document.querySelector("#error3").innerHTML ="La edad no es valida";
        return false;
    }else{
        document.querySelector("#error3").style.display ="none"; 
    }




    var nombre1 = document.querySelector("#nombre1 span");
    var apellido1 = document.querySelector("#apellido1 span");
    var edad1 = document.querySelector("#edad1 span");

    // Recoger y pegar la informacion en el bloque
    nombre1.innerHTML= nombre;
    apellido1.innerHTML= apellido;
    edad1.innerHTML=edad;

    // mostar el contenido de los datos 
    dashed.style.display = "block";

});

});