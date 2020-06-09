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
  
  public userpost:any;
  public mostra:any;
  public arr: any;

  constructor(
    private _ServicePeticion: PeticionesService 
  ){
    this.userId = 3
    this.fecha = new Date()
    this.userpost = {
      "name": "",
      "job": ""
  }
  this.arr = []
  
  }

  ngOnInit(){
    this.usuario()
    
  }
  fun(){
    this.mostra.forEach((element, index) => {
      this.arr.push(element.name)
    });
    
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
  onSubmit(form){
    this._ServicePeticion.addUser(this.userpost).subscribe(
      response=>{
        this.mostra = response;
        console.log(this.mostra)
        form.reset()
      },
      error =>{
        console.log(<any>error)
      })
  }



}
