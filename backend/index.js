'use strict'
var moongose = require('mongoose'); // se encarga de manejar casi todo
var app = require('./app');
var port = 3700; // Le damos un puerto 

moongose.set('useFindAndModify', false);
moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost:27017/portafolio',{ useNewUrlParser:true, useUnifiedTopology: true })   // es una peticion para probar una coneccion a la base de datos
.then(() => {
        console.log('Connection to database started success');
        // Servidor 
       app.listen(port, () =>{  // Sirve para que escuche en que puerto sera ejecutado
           console.log("Server running correctly") // Para ver si esta funcionando
       })

    }).catch((err) => { // Por si existe un error
        console.log(err)
    });

  