import { Component } from "@angular/core";

@Component({
    selector:"zapatillas",
    templateUrl:"./zapatillas.component.html"

})
export class ZapatillasComponent{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "Esta es otro tipo de componente externo";
        this.listado = "Listado de zapatillas"
    }
}