import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  public title = 'newAprendiendoAngular';
  public mostra_videojuegos: boolean;
  public config:string;
  public color: string; 
  public descripcion: string;

  constructor(){
    this.descripcion = Configuracion.descripcion;
    this.title = Configuracion.titulo;
    this.config = Configuracion.fondo;
    this.color = Configuracion.color;
    this.mostra_videojuegos = false;
  }

  ocultar(value){
    this.mostra_videojuegos = value;
  }


}
