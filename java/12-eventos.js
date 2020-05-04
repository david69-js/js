    'use strict'

    // Evento es una funcion que se ejecuta cuando sucede algo

    window.addEventListener('load', ()=>{// Esto de load es tiene la funcion cargar JS despues de que se haya cargado HTML
        
        
        
        var bg;
        function cambiaCo(){
                bg= boton.style.background;    
            if(bg == "yellow"){
                boton.style.background= "red"
            } else{
                boton.style.background= "yellow"
            }
            boton.style.padding= "20px";
            boton.style.boder="3px solid #ccc";

        
            return true;
        }

        // Click
        var boton = document.querySelector("#boton")
        boton.addEventListener('click', function(){
            cambiaCo();
        });

        //mouse over
        boton.addEventListener('mouseover', function(){
            boton.style.background="green";
        });
        //mouseout
        boton.addEventListener('mouseout', function(){
            boton.style.background="#ccc";
        })

        // Foco // hace referencia cuando pasa el mouse por el formulario

        var formu = document.querySelector("#campos");
        formu.addEventListener("focus", function(){
            console.log("[foco]Pasaste por el foco")
        });
        // blur funciona de la misma manera, pero es cuando sale de input
        
        formu.addEventListener("blur", function(){
            console.log("[blur]Salsite de input");
        });

        // Keydown funciona cuando se esta precionando una tecla
        formu.addEventListener("keydown", function(event){
            console.log("[keydown]Pulsando la tecla", String.fromCharCode(event.keyCode));
        });

        // Keypress funciona cuando precionaste la tecla 
        formu.addEventListener("keypress", function(event){
            console.log("[keypress]Pulsaste la tecla", String.fromCharCode(event.keyCode));
        });

        // keyup funciona cuando saltas la tecla
        formu.addEventListener("keyup", function(event){
            console.log("[keyup]Pulsaste la tecla", String.fromCharCode(event.keyCode));
        });

    
    });
    