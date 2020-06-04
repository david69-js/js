import { Component, OnInit } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'

@Component({
    selector: 'zapatillas',
    templateUrl:"./zapatillas.component.html"
})

export class ZapatillasComponent implements OnInit{
    public titulo: string= "Zapatillas deportivas";;
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public agrega: string;
    public colores_disponibles: string[];

    constructor(){
        this.color= 'negro';
        this.agrega = 'fila'
        this.marcas= new Array();
        this.colores_disponibles = new Array();
        this.zapatillas= [
            new Zapatilla('Nike', ' Nike Roshe', 'Verde', 300, true),
            new Zapatilla('Adidas', 'Adidas NMD', 'Negro', 350, true),
            new Zapatilla('Nike', 'Nike Magista', 'Amarillo', 200, false), 
            new Zapatilla('Reebook', 'Reebook Spartan', 'Azul', 150, true),
            new Zapatilla('Reebook', 'Reebook Spartan', 'Azul', 150, false),
            new Zapatilla('Puma', 'Uluan', 'Rosa', 180, false)

        ];
       
        
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.marca();
        this.colores();
        console.log(this.colores_disponibles);
    };

    getMarca(){
        this.marcas.push(this.agrega)
    }
    
    mostrarMarca(){
        return alert("La marca agregada es : "+this.agrega)
    }

    marca(){
        this.zapatillas.forEach((zapatilla, index )=> {

            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca)
            } 
        });
    }

    deleteMarca(index){
        this.marcas.splice(index,1)
    }

    colores(){
        this.zapatillas.forEach((colorcito) => {
            
            if(this.colores_disponibles.indexOf(colorcito.color)< 0){
               this.colores_disponibles.push(colorcito.color)
            }
        });
    }
    keyup(){
         return alert("Has dado enter")
    }


}