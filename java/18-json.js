'use strict'
// JSON es un arreglo mas, no conlleva mucha logica.
window.addEventListener("load", function(){
    console.log('Ya cargo nuestro js');
var pelicula = {
    titulo: "Batman vs superman",
    year: 2018,
    pais: "Rusia"
};

var peliculas = [
    {titulo:"Yemen", year:2020, pais: "Alemania"},
    pelicula
];

var pelis = document.querySelector("#pelis");
var index;
for(index in peliculas){
    var p = document.createElement('p');
    p.append(peliculas[index].titulo +" - "+ peliculas[index].year );
    pelis.append(p);
    
}

console.log(peliculas);

var usuario = [];

    fetch("https://reqres.in/api/users?page=2")
        .then(data => data.json())
        .then(usuarios => {
            usuario = usuarios.data
            console.log(usuario);
        })


});