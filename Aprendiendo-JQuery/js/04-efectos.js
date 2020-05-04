$(document).ready(function () {

var caja = $('#caja').hide();


$('#mostrar').click(function () { 
    
    caja.show('slow');
});
$('#ocultar').click(function () { 
    
    caja.hide('slow', function(){
        console.log('cartel ocultado');
    });

});


$('#animar').click(function () { 
    caja.animate({
                  marginLeft: '500px',
                  marginTop: '80px',
                  fontSize: '60px',
                  height: '145px' 
                 },'slow')
        .animate({
                    borderRadius: '999px',
                },'slow')
        .animate({
                    marginLeft: '0px',
                    marginTop: '30px',
                    fontSize: '30px',
                    height: '30px',
                    borderRadius: '0px',
                    background:'chocolate'
                },'slow');
    
});

});
