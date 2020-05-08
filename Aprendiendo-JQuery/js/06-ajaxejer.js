$(document).ready(function () {


    
    $('#formulario').submit(function (e) { 
        e.preventDefault();
        var usuario = {
            nombre: $('input[name="url"]').val()
        }
        console.log(usuario)

        $.post($(this).attr('action'), usuario, function (cualquierCosa) {
            console.log(cualquierCosa);
            
            $('#menu').prepend('<li>'+$('input[name="url"]').val()+'</li>');
          
            });
    });

    var caja = $('#caja')
    $('#mostrar').click(function (e) { 
        caja.show('slow');
        
    });

});