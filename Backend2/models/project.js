'use strict'
var mongoose = require('mongoose'); // Se encarga de trabajar con los modelos 


var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,  
    image: String,
});

module.exports = mongoose.model('Project', ProjectSchema);
// project ----> Guarda los docuemntos en un archivo que le mismo crea o ya esta 