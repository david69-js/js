'use strict'
var express = require('express'); // Sirve para crear las rutas, realizar rapido la base de datos

var ControllerRouter = require('../controllers/proyect'); //Solicitamos la el controller, de las funciones que establecimos

var routers = express.Router(); //Usamos la funcion router para configurar la rutas 

var mutipart = require('connect-multiparty');
var multipartMiddleware = mutipart({ uploadDir: './uploads'})



routers.get('/home', ControllerRouter.home); //La url recibira como parametro el nombre que queramos y luego recibira el controlador y el nombre del controlador
routers.post('/test', ControllerRouter.test);
routers.post('/save-project', ControllerRouter.Save);
routers.get('/project/:id?', ControllerRouter.getProject);
routers.get('/projects', ControllerRouter.getProyects);
routers.put('/project/:id', ControllerRouter.updateProject);
routers.delete('/project/:id', ControllerRouter.deleteProject);
routers.post('/upload-image/:id', multipartMiddleware,ControllerRouter.uploadImage)


module.exports = routers; // Exportamos routers