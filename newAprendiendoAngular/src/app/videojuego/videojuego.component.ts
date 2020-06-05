import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.scss']
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  public titulo: string;

  constructor() {
    this.titulo = 'Esta es la lista de los mejores video juegos'
   }
   
   ngOnInit(){
     console.log('Se ha cargado el componente de videojuego')
   }
   ngDoCheck(){
      console.log('Se ha realizado un cambio')
   }
   ngOnDestroy(){
     console.log("Se ha eliminado un elemento")
   }

   cambiarTitulo(){
     this.titulo = 'Esta es la nueva lista de video juegos'
   }

   
}
