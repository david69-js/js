$(document).ready(function () {
    
    // Slider 
    if(window.location.href.indexOf('index') >-1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        slideWidth: 1200,
        pager:false
      });
    }
      // Posts
      if(window.location.href.indexOf('index') >-1){
      var posts = [
          {
              title: 'Prueba 1',
              date: 'Publicado el dia '+ moment().date()+ ' de '+ moment().format('MMMM')+" de "+moment().format('YYYY'),
              content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem nec congue gravida. Vestibulum nec nunc arcu. Cras eget ipsum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur, urna nec aliquam mattis, nisi dolor pulvinar erossed ultricies velit risus nec dui. Aenean quis elit eget ex ullamcorper sodales ut vitae nibh. Suspendisse urna diam, facilisis nec consectetur ut, commodo quis turpis. Maecenas lacinia mollis lacinia. Integer egestas tristique eros nec sagittis." 
          },
          {
            title: 'Prueba 2',
            date:'Publicado el dia '+ moment().date()+ ' de '+ moment().format('MMMM')+" de "+moment().format('YYYY'),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem nec congue gravida. Vestibulum nec nunc arcu. Cras eget ipsum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur, urna nec aliquam mattis, nisi dolor pulvinar erossed ultricies velit risus nec dui. Aenean quis elit eget ex ullamcorper sodales ut vitae nibh. Suspendisse urna diam, facilisis nec consectetur ut, commodo quis turpis. Maecenas lacinia mollis lacinia. Integer egestas tristique eros nec sagittis." 
           },
           {
            title: 'Prueba 3',
            date:'Publicado el dia '+ moment().date()+ ' de '+ moment().format('MMMM')+" de "+moment().format('YYYY'),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem nec congue gravida. Vestibulum nec nunc arcu. Cras eget ipsum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur, urna nec aliquam mattis, nisi dolor pulvinar erossed ultricies velit risus nec dui. Aenean quis elit eget ex ullamcorper sodales ut vitae nibh. Suspendisse urna diam, facilisis nec consectetur ut, commodo quis turpis. Maecenas lacinia mollis lacinia. Integer egestas tristique eros nec sagittis." 
             },
            {
            title: 'Prueba 4',
            date: 'Publicado el dia '+ moment().date()+ ' de '+ moment().format('MMMM')+" de "+moment().format('YYYY'),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem nec congue gravida. Vestibulum nec nunc arcu. Cras eget ipsum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur, urna nec aliquam mattis, nisi dolor pulvinar erossed ultricies velit risus nec dui. Aenean quis elit eget ex ullamcorper sodales ut vitae nibh. Suspendisse urna diam, facilisis nec consectetur ut, commodo quis turpis. Maecenas lacinia mollis lacinia. Integer egestas tristique eros nec sagittis." 
             },
            {
            title: 'Prueba 5',
            date: 'Publicado el dia '+ moment().date()+ ' de '+ moment().format('MMMM')+" de "+moment().format('YYYY'),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem nec congue gravida. Vestibulum nec nunc arcu. Cras eget ipsum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur, urna nec aliquam mattis, nisi dolor pulvinar erossed ultricies velit risus nec dui. Aenean quis elit eget ex ullamcorper sodales ut vitae nibh. Suspendisse urna diam, facilisis nec consectetur ut, commodo quis turpis. Maecenas lacinia mollis lacinia. Integer egestas tristique eros nec sagittis." 
             },
             {
                title: 'Prueba 6',
                date: 'Publicado el dia '+ moment().date()+ ' de '+ moment().format('MMMM')+" de "+moment().format('YYYY'),
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem nec congue gravida. Vestibulum nec nunc arcu. Cras eget ipsum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consectetur, urna nec aliquam mattis, nisi dolor pulvinar erossed ultricies velit risus nec dui. Aenean quis elit eget ex ullamcorper sodales ut vitae nibh. Suspendisse urna diam, facilisis nec consectetur ut, commodo quis turpis. Maecenas lacinia mollis lacinia. Integer egestas tristique eros nec sagittis." 
                 }
      ]
        posts.forEach((element) => {
          var publicaciones = `
          <article class="post" >
                <h3>${element.title}</h3>
                    <span class="date">${element.date}</span>
                    <p>
                        ${element.content}
                    </p>
                <a href="#" id="more">Leer mas</a>
          </article>
          `;
        $("#posts").append(publicaciones);
      });
    }
            
      // Cambiar de tema de forma dinamica
      var theme = $("#theme");
      $('#to-green').click(function(){
            theme.attr('href', 'css/green.css')
      });

      $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
      });

      $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
     });
     
     // Hacer un scroll animado
     $('.subir').click(function(){
        $('html,body').animate({
                scrollTop: 0
            },800);
     });

     // LocalStorage

     $('#login form').submit(function () { 
         var form_name = $('#form_name').val();

         localStorage.setItem('form_name', form_name);
     });
        // Recupera los datos guardados
     var form_name = localStorage.getItem('form_name');
     
     if(form_name != null && form_name != 'undefined' ){
        var about = $('#about p');

        about.html('Bienvenido: '+form_name);
        about.append('<a href="#" id="logout">Cerrar Sesion</a> ')

        $('#login').hide()// Oculta el formulario

     }
     $('#logout').click(function(){ // Para cerrar sesion y eliminar datos del LocalStorage
        localStorage.clear();
        location.reload();
     });

     // Acordeon About
     if(window.location.href.indexOf('about') >-1){
        $('#acordeon').accordion();
     }
    
     // Reloj
     if(window.location.href.indexOf('reloj') >-1){
       setInterval(function(){
       
        var reloj = moment().format("h:mm:ss");
        $("#reloj").html(reloj);
      
    },1000);
    }

    // Validacion 

    if(window.location.href.indexOf('contact') >- 1){
        nada();

        $.validate({
          lang: 'es',
          errorMessagePosition: 'top',
          scrollToTopOnError: true
        });

    }
});
function nada() {
    $( "#date" ).datepicker({
        dateFormat: "dd-mm-yy"
    });
  };
