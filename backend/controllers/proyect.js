'use strict'
var saveProject = require('../models/projects'); //Para poder hacer uso de los modelos aca atraves de un metodo

var Controller ={ // Hacemos nuestro controlador con nuestras funciones
    
    home: (req, res)=>{ // Nos permite habilitar un espacio en la url para poder interactuar
       return res.status(200).send({
                 message: "I'm the home"
            })
    },

    test: (req, res) => {// Nos permite habilitar un espacio en la url para poder interactuar
       return res.status(200).send({
                message: "Test completed success"
            })
    },

    Save: (req, res) =>{// Este funcion  es parte que nos permite guardar datos en la base de datos
        var SaveProject = new saveProject(); //Instanciamos para poder hacer usu de ella y se guarda en una variable

        var params = req.body; // req.body sirve para poder ver que nos manda la peticion de la parte del bodyy es guardado en una variable
            SaveProject.name = params.name; // Se hace uso de componente instanciado, y para poder acceder a el usamos params.elNombre. params puede ser otro nombre pero este el modelo generico
            SaveProject.description = params.description;
            SaveProject.category = params.category;
            SaveProject.langs = params.langs;
            SaveProject.year = params.year;
            SaveProject.img = null;  

            SaveProject.save((err, projetStored)=>{ // Este es el metodo que para poder guardar en la base de datos
                //si esto es igual a error, entonnces en un estado 500 que nos nos envie el mensaje: "OH, the procces cannot be completed"
                if(err) return res.status(500).send({message: "OH, the procces cannot be completed"}); 

                //si esto es diferente a ProjectStored, entonnces en un estado 404 que nos nos envie el mensaje: "Error in the petition"
                if(!projetStored) return res.status(404).send({message: "Error in the petition"});
                
                // Y en el caso de que no exista un error que nos guarde los datos.
                return res.status(200).send({projetStored})
            });
    },

    getProject: (req, res)=>{

        var projectId = req.params.id;
            
        if(projectId == null)  return res.status(404).send({ message: 'Archivo no encontrado'});

            saveProject.findById(projectId, (err, project)=>{
            
            if(err) return res.status(500).send({message: 'Error al buscar'});

            if(!project) return res.status(404).send({ message: 'Archivo no encontrado'});

            return res.status(200).send({project})
        });

    },
    getProyects: (req, res)=>{
        
        saveProject.find({}).sort("-year").exec((err, projects)=>{
            
            if(err) return res.status(500).send({message: "Error: Don't completed"});

            if(!projects) return res.status(404).send({message:"Cannot be completed"});

            return res.status(200).send({projects})
        });
    },

    updateProject: (req, res) => {
        var projectId = req.params.id;
        var update = req.body;

        
        saveProject.findByIdAndUpdate(projectId, update, {new: true},(err,projectupdate) => {
            
            if(err) return res.status(500).send({message: "Ha ocurrido un error"});

            if(!projectupdate) return res.status(404).send({message: "Raios nene jajaj "});

            return res.status(200).send({project: projectupdate})
        })
    },

    deleteProject: (req, res) =>{
        var projectId = req.params.id; 
        
        saveProject.findByIdAndRemove(projectId, (err, deleteProject)=>{
            
            if(err) return res.status(500).send({message:"No ha podido eliminar"});

            if(!deleteProject) return res.status(404).send({message: "No se encontro el documento"});

            return res.status(200).send({project: deleteProject})
        });
    }, 
// Esta no sirve, no se que utilizar 
uploadImage: function(req, res){
    var projectId = req.params.id;
    var fileName = 'Imagen no subida...';

    if(req.files){
        var filePath = req.files.image.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[1];
        var extSplit = fileName.split('\.');
        var fileExt = extSplit[1];

        if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

            saveProject.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
                if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

                if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

                return res.status(200).send({
                    project: projectUpdated
                });
            });

        }else{
            fs.unlink(filePath, (err) => {
                return res.status(200).send({message: 'La extensión no es válida'});
            });
        }

    }else{
        return res.status(200).send({
            message: fileName
        });
    }

}

}

module.exports = Controller; //Importamos nuestras funcioens
// Buscar el proyecto con base en el id
