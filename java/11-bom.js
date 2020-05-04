'use strict'


// bom --- browswe object model // tiene infinidad de cosas interasantes para realizar 

// Depende del de hasta donde esta extendida la consola ese sera la inmensidad de pixes//se encarga de buscar el la 
//inmensidad de la pantalla

function bom(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
}

// Busca la verdadera inmensidad de la pantalla, importa si la pantalla esta extendida

function getBom(){
    console.log(screen.width);
    console.log(screen.height);
}

// Location sirve para redirigirte a otra pagina, temporalmente
function cambiaPAge(url1){
      window.location = url1;  
}

// sirver para abrir una pequena ventana con una url
function cargaPage(url2){
      window.open(url2,"","height=400, widht=400")  
}

