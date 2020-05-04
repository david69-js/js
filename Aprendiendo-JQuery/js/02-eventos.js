$(document).ready(function () {
  

    var caja = $('#caja');
/*
        caja.mouseover(function () { 
            $(this).css('background', 'red');
        });

        caja.mouseout(function () { 
            $(this).css('background', 'gray');
        });
*/
// Para optimizar el cogido
caja.hover(colorgris, colorrojo);

// Evento de click
caja.click(function () { 
    $(this).css('background', 'blue');
});
caja.dblclick(function () { 
    $(this).css('background', 'green');
});
// Focus y Blur 
var  datos =$('#datos');
var entrar = $('#nombre');
entrar.focus(function () { 
    $(this).css('border', '3px solid green')
});



entrar.blur(function () { 
    $(this).css('border', '1px solid gray')
    
datos.text($(this).val()).show();
});

// Mousedown y mouseoup
datos.mousedown(function () { 
    $(this).css('border-color','gray')
});

datos.mouseup(function () { 
    $(this).css('border-color','black')
});

// mousemove
$('body').mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $(this).css('cursor','none');
    var sigueme =  $('#sigueme')
    
    sigueme.css('left' ,event.clientX);
    sigueme.css('top' ,event.clientY);
});
});







function colorrojo() { 
    $(this).css('background', 'red');
};
function colorgris() { 
    $(this).css('background', 'gray');
};
