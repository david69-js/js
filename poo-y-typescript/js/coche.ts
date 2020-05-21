interface CocheBase{
    getModelo():string;
    getVelocidad():number; // Un contrato de metodos o funciones que se deben agregar 
}

class Coche implements CocheBase{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo = null){
        this.color= "Amarillo";
        this.velocidad = 0;
        if(modelo == null){
            this.modelo= "BMW generico";
        }else{
            this.modelo= "BMW generico";
        }    
    }

    // Funciones 
    
    public setModelo(modelo: string){
        this.modelo = modelo;
    }
    public getModelo(){
        return this.modelo;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{
        return this.velocidad;
    }
}

var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();   


coche.setColor('Rojo');
coche.setModelo('Toyota Corola');
coche.acelerar();
coche.acelerar();
coche.acelerar();



console.log("El color del coche 1 es: "+coche.getColor());
//console.log("El modelo del coche 1 es: "+coche.getModelo());
console.log("La velocidad del coche 1 es: "+coche.getVelocidad());

coche.frenar();
console.log("La velocidad del coche 1 despues de frenar es: "+coche.getVelocidad());

   /*
coche_dos.setColor('Azul');
coche_tres.setColor('Verde');
   console.log("El color del coche 2 es: "+coche_dos.getColor());
   console.log("El color del coche 3 es: "+coche_tres.getColor());
*/