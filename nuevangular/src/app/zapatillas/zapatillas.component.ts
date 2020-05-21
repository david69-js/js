import { Component, OnInit } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';


@Component({
    selector:"zapatillas",
    templateUrl:"./zapatillas.component.html"

})
export class ZapatillasComponent implements OnInit{
    public titulo: string;
    public listado: string;
    public zapatillas: Array<any>;
    constructor(){
        this.titulo = "Esta es otro tipo de componente externo";
        this.listado = "Listado de zapatillas",
        this.zapatillas = [
            new Zapatilla('Reebook clasic',"Rojo",'Reebok',80,true),
            new Zapatilla('Nike Runner',"Morado",'Nike',60,true),
            new Zapatilla('Adidas NMD',"Blanco",'Adidas',180,false)
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);
    }
}