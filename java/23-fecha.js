'use strict'
window.addEventListener('load',function(){

    var fecha = new Date()
    
    var year = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDay();
    var hora = fecha.getHours();


    var texhora =  `
    El año es: ${year}
    El mes es : ${mes}
    El dia es : ${dia}    
    La hora es : ${hora}
    
    `;
    console.log(texhora);
    console.log(Math.ceil(Math.random()*1000));
});