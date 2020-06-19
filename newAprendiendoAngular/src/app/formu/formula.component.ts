import { Component, OnInit } from "@angular/core";
import { Formulary } from '../models/formulary';
import { FormularyService } from '../service/form.petice';
import { DataService } from '../data.service';


@Component({
    selector:"formulary",
    templateUrl:"./formula.component.html",
    providers:[ FormularyService]
})

export class FormComponent implements OnInit{

    public data: any;
    public name:any;
    public datos:Array<Formulary>
    public date1:any;
   
    constructor(
        private _FormService: FormularyService,
        private dateService: DataService
    ){   
    
    this.data= []
    this.name=[]

    }

    ngOnInit(){
    this.datos = this._FormService.getZapatillas();
    this.dateService.getData().subscribe(
        response =>{
        this.date1 = response;
        console.log(this.date1)
    },
    error=>{
        console.log(<any>error)}
        )
}

    onSubmit(from){
        from.reset();
    }
    getUser(user){
        this.name.push(user.value)
    }

      addMarca(NewForm){
        this.data.push(NewForm.value)
      }

  
}