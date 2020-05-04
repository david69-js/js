alert('wenas');

// asi se realiza una array multidimencional

var categorias = ['accion','terror','miedo','comedia'];
var peliculas = ['tarde fria', 'harry','gran torino'];


// funcion sort y funcion reverse, sirven  para ordenar de forma alfabetica y tambien reversa jaja
peliculas.sort();
console.log(peliculas);

//var cine = [categorias, peliculas];

//console.log(cine[0][2]);
/*

while(elemento != "YA"){
    var elemento = prompt('Escribe tu pelicula, y cuando ya no quieras agregar escribe; YA ');
    peliculas.push(elemento);
}
peliculas.pop();
*/


// para buscar y eliminar un elemento de  manera concreta se realiza la siguiente operacion
var indice = peliculas.indexOf('harry');
if(indice > -1 ){
    peliculas.splice(indice,2);
}
console.log(peliculas);

// Con este metodo puedo hace que los elementos de la array se vuelva string

var pelis = categorias.join();

console.log(pelis);

// Con la funcion split hare que una cadena de texto se vuelva una array

    var cadena = "texto1, texto2, luci, mario";
    var array2 = cadena.split(", ");
        console.log(array2);




/* NAda que ver, solo fue un repaso
document.write("<h1>"+"peliculas destacadas"+"</h1>");
document.write("<ul>");
peliculas.forEach((element,indice) => {
    document.write("<li>"+indice+" - "+element+"</li>");
});
document.write("</ul>");
*/