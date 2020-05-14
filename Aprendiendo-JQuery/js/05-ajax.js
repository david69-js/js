$(document).ready(function () {

$.get("https://reqres.in/api/users", {page: 3,per_page: 3}, function (response) {
        response.data.forEach((element, indice )=> {
            $('#datos').append("<p>"+indice+". "+element.first_name+" "+element.last_name);
        });
    });
   
    $('#formulario').submit(function (e) { 
        e.preventDefault();
        var usuario = {
            nombre: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        }
        console.log(usuario);
/*
        $.post($(this).attr('action'), usuario, function (cualquierCosa) {
        console.log(cualquierCosa)        
        });
*/
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: usuario,
            beforeSend: function(){
                 console.log('Enviando formulario...')   
            },
            success: function (response) {
                console.log(response);    
            },
            error: function(){
                console.log('A ocurrido un error');
            },
            timeout: 2000
        });
        
    });

    
});