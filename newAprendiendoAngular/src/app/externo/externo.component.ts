import { Component, OnInit } from "@angular/core";
import { PeticionesService } from "../service/peticiones.service"

@Component({
selector:"extremo",
templateUrl:'./externo.component.html',
providers:[PeticionesService]
})

export class ExternoComponent implements OnInit{
  public user: any;
  public userId: any;
  public fecha:any;

  constructor(
    private _ServicePeticion: PeticionesService 
  ){
    this.userId = 3
    this.fecha = new Date()
  }

  ngOnInit(){
    this.usuario()
  }

  usuario(){
    this.user = false;
    this._ServicePeticion.getUser(this.userId).subscribe(
      result =>{
       this.user = result.data;
      },
      error =>{
        console.log(<any>error)
      });
  }


}
