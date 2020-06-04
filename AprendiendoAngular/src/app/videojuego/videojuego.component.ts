import { Component, OnInit, DoCheck, OnDestroy  } from "@angular/core"

@Component({
    selector: 'videojuego',
    /* // Podemos incertar una plantilla desde aca, pero es mejor hacerla desde su html
    template: `
        <h2>Video Juegos</h2>
        <ul>
            <li>Gta</li>
            <li>Mario</li>
            <li>Royale</li>
        </ul>
    `
    */
   templateUrl:'./videojuego.component.html'
})

export  class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    titulo: string;

    constructor(){
        this.titulo = "Videojuegos mas Populares";

       // console.log("El componente de videojuegos se ha cargado");
    }

    ngOnInit(){
        console.log('Se ha iniciado el componente de video juegos');
    }

    ngDoCheck(){
        console.log('DoCheck ejecutado');
    }

    ngOnDestroy(){
        console.log('Componente eliminado');
    }

    cambiarTitulo(){
        this.titulo= "Este es el nuevo titulo de Video Juegos"
    }



}