import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aca vamos de nuevo';
  public ocultar_videojuegos: boolean = true;
  
      ocultar(value){
        this.ocultar_videojuegos= value;
      }
}
