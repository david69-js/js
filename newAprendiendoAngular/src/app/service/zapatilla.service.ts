import { Injectable } from "@angular/core"; // Para poder injectar el servicio
import { Zapatilla } from '../models/zapatilla'; // De es de donde obtenenos las propiedades

@Injectable()

export class ZapatillaService{
    public zapatillas: Array<Zapatilla>

    constructor(){
        this.zapatillas =[
            new Zapatilla('Nike','Nike Roshe', 'Negro', 80,true),
            new Zapatilla('Adidas','Adidas NMD', 'Verde', 100,true),
            new Zapatilla('Reebook','Reebook Spartan', 'Rosa', 180,false),
            new Zapatilla('Puma','Puma sd', 'Azul', 200,true),
            new Zapatilla('Puma','Puma tipas', 'Amarillo', 150, false),
        ];  
    }
    getTexto(){
        return "Texto prueba del servicio" 
    }

    getZapatillas():Array<Zapatilla>{
        return this.zapatillas // Utilizaremos esta funcion para que devuelva una array
    }

}