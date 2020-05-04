'use strict'
window.addEventListener("load", function(){
    console.log("Ya esta cargada");
    // Fetch{Es un sustituto del Ajax} y peticiones / apis rets 
     
var div = document.querySelector("#vale"); 
var divprofe = document.querySelector("#profesor");
var divs = document.querySelector("#janet");



    getUsuarios()
        .then(data => data.json())
        .then(users =>{
        listadoUsuarios(users.data);
                        
             return getInfo();
                    
        }) .then(data =>{
            divprofe.innerHTML =  data;
            
            
            return getJanet()
        })
        .then(data => data.json())
        .then(users => {
                
            Janet(users.data)
        }).catch(error =>{ // sirve para capturar un error
            console.log(error +"Valio madre");
            alert("Error en las peticiones");
    
        })



        // Listado  de datos 
        function getUsuarios(){
            return fetch("https://reqres.in/api/users")
        }
        function getJanet(){
            return fetch("https://reqres.in/api/users/2")
        }
        // Realizar un propio backend
        function getInfo(){
            var profesor = {
                nombre: "David ",
                apellido: "Lopez",
                url: "https://www.youtube.com/watch?v=RPtZZYyHNUU&list=RDMMUjiP7cdiwgI&index=2"
            };
            return new Promise((resolve, rejetc)=>{
            setTimeout (function(){
                var profesor_string = JSON.stringify(profesor);

                if(typeof profesor_string != "string"  || profesor_string == " ") return rejetc("Error 69");

                return resolve(profesor_string);
            }, 3000)
            })
            
        }



        // Recorer array de usuarios
        function listadoUsuarios(usuario){
            usuario.map((user, i)=>{
                        
                let nombre = document.createElement("h3");

                nombre.innerHTML = i +" . "+user.first_name+ " " +user.last_name + "//  Email: "+user.email;

                div.append(nombre);
                let loading = document.querySelector("#loading").style.display ="none";
            });
        }
        // Agregar un solo usuario

        function Janet(user){
                
                let nombre2 = document.createElement("h4");
                let avatar = document.createElement("img")
                nombre2.innerHTML = user.first_name+ " " +user.last_name + "//  Email: "+user.email;
                

                avatar.src = user.avatar;
                avatar.width ="100"

                divs.append(nombre2);
                divs.append(avatar);
                let load = document.querySelector("#load").style.display ="none";
                console.log(load);
        
        }
        function profesor1(profe){
            profe.map((user, i)=>{
                        
                let nombre2 = document.createElement("h3");

                nombre2.innerHTML = i +" . "+user.nombre+ " " +user.apellido + "//  URL : "+user.url;

                div.append(nombre);
                let loading = document.querySelector("#loading").style.display ="none";
            });
        }

        });