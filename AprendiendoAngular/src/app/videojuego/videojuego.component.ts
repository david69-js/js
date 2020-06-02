import { Component, Class } from "@angular/core"

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

export  class VideojuegoComponent {
    titulo: string;

    constructor(){
        this.titulo = "Videojuegos mas Populares"
        console.log("El componente de videojuegos se ha cargado");
    }

}