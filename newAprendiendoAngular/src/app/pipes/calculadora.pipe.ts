import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'calculadora',
})

export class CalculadoraPipes implements PipeTransform{
    
    // date | calculadora
    transform(value:any, value_2:any){
        let operacion = `
         suma: ${value+value_2}
         resta: ${value-value_2}
         multiplicacion:${value*value_2}
         division:${value/value_2}
        `
        return operacion;
    }
}