import { Injectable } from "@angular/core";
import { Formulary } from '../models/formulary';

@Injectable()
export class FormularyService{
    public formula: Array<Formulary>

    constructor(){
        this.formula = [
           new Formulary('','','',0,'')
        ];  
    }

    getTexto(){
        return "Texto prueba del servicio" 
    }

    getZapatillas():Array<Formulary>{
        return this.formula // Utilizaremos esta funcion para que devuelva una array
    }
}