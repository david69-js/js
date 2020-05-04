$(document).ready(function () {
    console.log('selectores')


    // seleccionar id
$("#rojo").css('background', 'red')
                         .css('color', 'green');

$('#amarillo').css('background', 'black')
              .css('color','white');  

    // seleccionar clases
    
var clases = $('.zebra');

        clases.css('padding','20px')
              .css('background', 'green')
              
console.log(clases.eq(0));


$('.sin_borde').click(function () { 
    $(this).addClass('zebra');
    
});
// seleccionar etiquetas

var parrafos = $('p').css('cursor', 'pointer');

parrafos.click(function () { 
        var that = $(this);
    if(!that.hasClass('grande') ){
        that.addClass('grande');
    }else{
        that.removeClass('grande');
    }
    

});

// seleccionar atributo

$('[title="google"]').css('background', '#ccc');
$('[title="musica"]').css('background', 'blue')

// varios 
$('p, a').addClass('marger-superior')

// buscar elementos  de un httml
var busqueda = $('body').find('[title="google"]');
console.log(busqueda)
});