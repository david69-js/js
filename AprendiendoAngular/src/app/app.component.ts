import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public mostrar: boolean;
  public descripcion: string; 
  public config;
  
  constructor(){
   
    this.title= 'Este es el curso de Robles' ;
    this.mostrar= false;
    this.descripcion = Configuracion.descripcion;
    this.title = Configuracion.titulo;
    this.config = Configuracion;
  }

ocultar(value){
  this.mostrar= value;
}


}
