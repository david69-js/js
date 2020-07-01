'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path')

var controller = {
    
    home: function(req, res) {
        return res.status(200).send({
            message: "Hola Soy la home"
        })
    },  

    test: (req, res) =>{
        return res.status(200).send({
            message: 'Hola soy un texto de prueba'
        })
    },

    saveProject: function(req, res){
		var project = new Project();

		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		project.save((err, projectStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({project: projectStored});
		});
    },

    getProject: (req, res) =>{
        var projectId = req.params.id;
        
        if(projectId == null) return res.status(404).send({message: "No se ha encontrado el documento"})
        //Es la validacion para hacer opcional el parametro

        Project.findById(projectId, (err, project) =>{
            if(err) return res.status(500).send({message: "Al parecer ocurrio un error"});

            if(!project) return res.status(404).send({message: "No se ha encontrado un documento"});

            return res.status(200).send({project})
        });
    },
    
    getProjects: (req, res) =>{
        
        Project.find({}).sort('-year').exec((err, projects) =>{

            if(err) return res.status(500).send({message: "Ha ocurrido un error al obtener datos"});

            if(!projects) return res.status(404).send({message: "No se encontraron los documentos"});

                return res.status(200).send({projects})  
        })
    },

    updateProject: (req, res) => {
        var projectId = req.params.id;
        var update = req.body;


        Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdate)  =>{
                
            if(err) return res.status(500).send({message: "Ha ocurrido un error"});

            if(!projectUpdate) return res.status(404).send({message: "No se ha encontrado el docuemnto"});

            return res.status(200).send({
                project: projectUpdate})
        });
    },

    deleteProject: (req, res) =>{
        var projectId = req.params.id;
        
        Project.findByIdAndRemove(projectId, (err, projectDelete) =>{
            if(err) return res.status(500).send({message: "Ha ocurrido un error"});

            if(!projectDelete) return res.status(404).send({message: "No se ha encontrado el documento para el eliminar"});

            return res.status(200).send({
                project: projectDelete});
        });  
    },

    uploadImage: (req, res) =>{
        var projectId = req.params.id;
        var fileName = 'imagen no subida';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.')
            var fileExt = extSplit[1]

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                
            Project.findByIdAndUpdate(projectId, {image: fileName},{new: true},(err, imageUpload, ) =>{

                if(err) return res.status(500).send({message: "No se pudo realizar"});

                if(!imageUpload) return res.status(404).send({message: "No se encontro el documento"});

                return res.status(200).send({
                    project: imageUpload})
            });
            }else{
                fs.unlink(filePath, (err) =>{
                    return res.status(200).send({
                        message: 'La extension no es valida'
                    });
                })

            }

        }else{
            return res.status(200).send({
                message: fileName
            })
        }
    },

    getImage: (req, res) =>{
        var file = req.params.image;
        var path_file = './uploads/'+file;

        fs.exists(path_file, (exists) =>{
            if(exists){
                return res.sendFile(path.resolve(path_file))
            }else{
                res.status(200).send({
                    message: "No existe esa ruta"
                })
            }
        });
    }

}

module.exports = controller;