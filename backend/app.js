'use strict'

var express = require('express');//para ayudarnos a crear aplicaciones web en menos tiempo ya que nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies,

var bodyParser = require('body-parser');


var app = express();
// load Ruoters
var project_routes = require('./routes/proyect')

// Middlewars 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Sirve para que guarde la informacion en formato json para que angular lo pueda leer

// Cors
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Ruotes
app.use('/api', project_routes)  // para agregar un middleware, y asi todas seran /api/...



//Exports
module.exports = app; // Exportamos 





// These are test routes

/*app.get('/', (req, res) => {
    
    res.status(200).send(// Si se cumple el texto saldra en como titulo
        "<h1>This is a message since nodeJS</h1>"
    );
})

app.post('/test/:id', (req, res) => {
    console.log(req.body.nombre, req.body.apellido)
    console.log(req.query.web);
    console.log(req.params.id)
     res.status(200).send({ // Este texto sale si la condicion de 200 se cumple
        mesage: "This is a message since nodeJS"
     });
})
*/

