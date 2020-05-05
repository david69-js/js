$(document).ready(function () {

    //load 

    // $('#datos').load('https://reqres.in/');
    
    // Get y post
$.get("https://reqres.in/api/users?page=2", {page: 2}, function (response) {
        console.log(response);
            response.data.forEach((element, index) => {
            $('#datos').append('<p>'+element.first_name+" "+element.last_name+'</p>');;
        });
    });

    // Post

$('#formulario').submit(function (e) { 
    e.preventDefault();
    var usuario = {
        nombre: $('input[name="name"]').val(),
        Web:$('input[name="web"]').val()
    }
    $.post($(this).attr("action"), usuario, function (response) {
            console.log(response)
        });
        return false;

});
});