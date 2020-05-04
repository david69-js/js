'use strict'
window.addEventListener("load", function(){
    console.log('Dom cargado');

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
        box_dashed.style.display = "none";

    formulario.addEventListener("submit", function(){
            console.log("Evento submit capturado");

          

            var nombre = document.querySelector('#nombre').value; 
            var apellido = document.querySelector('#apellido').value;
            var edad1 = parseInt(document.querySelector('#edad')).value;
                box_dashed.style.display = "block";

                if(nombre.trim() == null || nombre.trim().length== 0){
                    document.querySelector("#error").innerHTML = "El nombre no es valido"; 
                    alert("El nombre no es valido");
                    return false;
                }else{
                    document.querySelector("#error").style.display ="none"; 
                }
                if(apellido.trim() == null || apellido.trim().length== 0){
                    document.querySelector("#error1").innerHTML = "El apellido no es valido";
                    alert("El apellido no es valido");
                    return false;
                }else{
                    document.querySelector("#error1").style.display ="none"; 
                }
                if(edad1 == null || edad1 <= 0 || isNaN(edad1)){
                    document.querySelector("#error2").innerHTML = "La edad no es valida";
                    alert("La edad no es valida");
                    return false;
                }else{
                    document.querySelector("#error1").style.display ="none"; 
                }
            
            
            var p_nombre = document.querySelector('#p_nombre span ' );
            var p_apellido = document.querySelector('#p_apellido span ');
            var p_edad = document.querySelector('#p_edad span ' );

            p_nombre.innerHTML= nombre ;
            p_apellido.innerHTML= apellido ;
            p_edad.innerHTML= edad1 ;


                /*
            var datosU = [nombre,apellido, edad];
            var indice ;

            for(indice in datosU){
                var parrafo = document.createElement("p");
                parrafo.append(datosU[indice]);
                box_dashed.append(parrafo);
            }
            */

        });

});