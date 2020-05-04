window.addEventListener('load', function(){
    console.log('JS ya esta cargado');


    var formulario = document.querySelector("#formulario"); 


    
    formulario.addEventListener('submit', function(){
        console.log("Submit capturado");

            var nombre = document.querySelector("#nombre").value;
            var apellido = document.querySelector("#apellido").value;
            var usuario = document.querySelector("#usuario").value;
            var telefono = document.querySelector("#telefono").value;
            var correo = document.querySelector("#correo").value;
            var contra = document.querySelector("#contra").value;

            // correo
            var expresion = /\w+@\w+\.+[a-z]/;
            // contra
            var expresion2 = /\[A-Z]+[a-z]+.+\w/;

            // texto
            if(nombre == 0 || nombre == " " || apellido == 0 || apellido == " " || usuario == 0 || usuario == " "){
                alert("Los campos son obligatorios");
                return false;
                // telefono
            }else if(telefono == 0 || isNaN(telefono) || telefono == null){
                alert("El campo telefono es obligatorio");
                return false;
                // correo
            }else if(correo == null || correo == 0 ){
                alert("Todos los campos son obligatorios");
                return false;
            }else if(!expresion.test(correo)){
                alert("El correo no es valido");
                return false;

            }else if( contra == 0 || contra == " " && contra == String && contra == Number || contra.length < 10){
                alert("la clave no es segura");
                return false;
            }
            console.log('Nombre: '+nombre +"\n" + 'Apellido: '+apellido+"\n"+"Usuario: "+usuario+"\n" +"Telefono: "+telefono+"\n"+"Correo: "+correo+"\n" +"Clave: "+contra+"\n");
    });

    var boton = document.querySelector("#submit");
       
    boton.addEventListener('click', function(){
        console.log('click capturado');
        if(formulario = false){
            boton.style.background = 'red';
        }else{
            boton.style.background = '#C66853';
            boton.style.fontSize = '15px';
        }
        console.log(this);
        this.style.border= "10px solid black"
    });
    


});

