'use strict'
/*Aqui se realiza la coneccion a la base de datos*/
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio1')
        .then(() => {
            console.log("Conexion a la base de datos realizada con exito");

            // Creacion del servidor 
        app.listen(port, ()=>{
            console.log("Servidor corriendo en el localhot: 3700")
        })

        }).catch((err) => {
            console.log(err)            
        });