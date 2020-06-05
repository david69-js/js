import { Component, OnInit } from '@angular/core'; // Es para cargar nuestro componente
import { Zapatilla } from  '../models/zapatilla'; //Es models para poder hacer uso del molde
import { ZapatillaService } from '../service/zapatilla.service'; // Importamos el servicio


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers:[ ZapatillaService] // Para poder cargar nuestro servicio externo
})

export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marca: Array<string>;
    public colors:String;
    public colores: Array<string>;
    public mi_marca: string;
   
    
  constructor(
    private _zapatillaService: ZapatillaService
    ) { 
      this.titulo = "Esta es nuestra lista de zapatillas",
      this.colors= 'black';
      this.mi_marca = 'Fila';
      this.marca = [],
      this.colores=[]
  }

  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getZapatillas();
    alert(this._zapatillaService.getTexto())
    this.getMarca();
    this.getColores();

  }

  getMarca(){
    this.zapatillas.forEach((zapatilla, index) => {

      if(this.marca.indexOf(zapatilla.marca)< 0){
        this.marca.push(zapatilla.marca);
      }
    });
  }

  deleteMarca(index1){
    this.marca.splice(index1,1)
  }

  addMarca(){
    this.marca.push(this.mi_marca)
  }


  getColores(){
    this.zapatillas.forEach((colorcito, index) => {
      
      if(this.colores.indexOf(colorcito.color) < 0){
        this.colores.push(colorcito.color);
      }  

    });
  }

  alerta(){
    alert( this.mi_marca)
  }


}
