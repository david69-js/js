'use strict'

window.addEventListener('load', function(){

     var tiempo = setInterval(function(){
        
        console.log("Set interval ejecutandose");
         
        var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize ="50px"){
                encabezado.style.fontSize = "20px";

            }else {
                encabezado.style.fontSize = "50px";

            }
        
    }, 3000);




  setTimeout(muestraMensaje, 3000);
  
});

function muestraMensaje() {
    console.log("Han transcurrido 3 segundos desde que me programaron");
  }