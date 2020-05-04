'use strict'
window.addEventListener("load", function(){
 
var formulario = document.querySelector('#formpelicula');

formulario.addEventListener('submit', function(){
    var addpeli = document.querySelector("#addpeli").value;
    if(addpeli.length > 0 ){
        localStorage.setItem(addpeli,addpeli);
    }

});

var ul = document.querySelector("#list");
    for(var i in localStorage){
        if(typeof localStorage[i] == "string"){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

    var borraform = document.querySelector('#borraform');

    borraform.addEventListener('submit', function(){
    var delepeli = document.querySelector("#delepeli").value;
    if(delepeli.length > 0 ){
        localStorage.removeItem(delepeli,delepeli);
    }

});

});