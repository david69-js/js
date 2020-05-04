$(document).ready(function () {
    load();
    losLinks();

});


function load(){

    $('a').each(function (index) { 
        var las_a = $(this);
        var enlace = las_a.attr('href');

        las_a.attr('target','_banck');
        las_a.text(enlace);
    });

}
function losLinks(){
    $('#enviar')
    .removeAttr('disabled')
    .click(function () { 
        $('#menu').prepend('<li><a href="'+$('#texto').val()+'"></a></li>');
        $('#texto').val(' ')
        
          load();
      });
    
}