import { Component } from '@angular/core';
import { Configuracion } from './models/modelo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Aca vamos de nuevo';
  public ocultar_videojuegos: boolean = true;
  public descripcion:string;
  public config;
      ocultar(value){
        this.ocultar_videojuegos= value;
      }
      constructor(){
          this.title= Configuracion.titulo;
          this.descripcion= Configuracion.descripcion;
          this.config = Configuracion;
      }
}
