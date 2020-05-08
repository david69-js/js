$(document).ready(function () {
    
    // Para poder mover elementos en toda la pantalla
    $(".elemento").draggable(); 

    //Redimencionar 
    $(".elemento").resizable();
    
    // Seleccionar y ordenar un elemento de la lista
   // $('.lista').selectable();
   $('.lista').sortable({
       update: function(evento, ui){
            console.log('Se ha realizado un cambio')
       }
   });

   // Drop
   $('#elmento-movido').draggable();
   $('#estatico').droppable({
       drop: function(){
           console.log('Has soltado el objeto justo aca');
       }
    });

   // Efectos nene
   $('#mostrar').click(
       function(){
            $('.efecto').toggle('drop', 1000); // drop, slide, fade, blind, fold, puff
       })


});