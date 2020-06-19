/*
This is model view controler, separate the businnes logic 
*/

'use strict'
var moongose = require('mongoose'); // Se encarga de manejar los modelos

var schema = moongose.Schema; // De las funciones de moogose utilizaremos la funcion Schema

var SchemaProyects = schema({ //Utilizaremos un esquema, el cual es nuestro modelo
    name: String,
    description: String,
    category: String,
    langs: String,
    year:Number,
    img: String
});

module.exports = moongose.model('Project',SchemaProyects); 
// Mongose hace que se guarde en minuscula, y si no existe realiza una base de datos por nosotros 