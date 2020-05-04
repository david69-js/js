'use strict'
// Local Storage con ella podemos guardar informacion y que consista 
window.addEventListener('load', function(){
    console.log('Ya esta cargado el js');

//comprobar si el local storage es compatible 
if (typeof(localStorage) != 'undefined') {
    console.log("LocalStorage disponible");
} else {
    console.log('El LocalStorage no esta disponible');
}


// guardar una clave y un titulo
localStorage.setItem('titulo','Curso de JS');

// recuperar elemntos 

var nombre= document.querySelector('#pelis').innerHTML= localStorage.getItem('titulo');

// Guardar objetos en LocalStorage

var usuario = {
    nombre:"David toj",
    email:"davi333@as.com",
    web:"mi primera vez"
};
localStorage.setItem('titulo', JSON.stringify(usuario));

// recuperar el objeto guardado en el local storage
var recu =JSON.parse(localStorage.getItem('usuario'));
console.log(recu);

// mostrarlo en pantalla 
document.querySelector('#datos').append(usuario.nombre +" - "+usuario.email);

localStorage.clear();
});