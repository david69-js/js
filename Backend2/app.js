'use strict'
/*Aqui se realiza la configuracion de express, obtener sus metodos http*/

var express = require('express');
var bodyparser = require('body-parser');


var app = express();


//Congiguracion de rutas carga de archivos 
var project_router = require('./routes/project');


// Configuracion del middleware, parametro antes de la funcion o el route
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json()) // Toda peticion que se realice se convertira en json


//Cors 
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



//Rutas 
app.use('/api', project_router);

//Exportar 

module.exports = app;

/*
app.get('/test', (req, res) =>{ // Cuidado con cambiar los lugares de req y res
  res.status(200).send(
     "<h1>Hola mundo desde Espress</h1>"
    )
});

app.post('/testw/:id', (req, res) =>{ // Cuidado con cambiar los lugares de req y res
    console.log(req.body.apellido, req.body.nombre);
    console.log(req.query.web)
    console.log(req.params.id)
    res.status(200).send(
       "<h1>Hola mundo desde Espress</h1>"
      )
  })
*/