// Definir interface  
interface CamisetaBase {
    setColor(color); // Son funciones que estamos predeterminando para que ser mas estrictos a la hora de programar 
    getColor(); // -- --- 
}
// Decorardor 

    function estampar(logo: string){
        return(target: Function)=>{
            target.prototype.estampacion = function(): void{
                console.log('Camiseta estampada con el logo: '+logo);
            }
        } 
    }
//Clase(Sirve para molde del objeto)
@estampar('Gucci')
 class Camiseta implements CamisetaBase{
    /*
    // Propiedades (Caracteristicas del Objeto) 
    public color: string; // del modo public
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
    */
   private color: string;
   private modelo: string;
   private marca: string;
   private talla: string;
   private precio: number;
    // Metodos(Funciones o acciones del objeto) // para poder acceder a ello se ocupan funciones

    //Constructor 
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo; 
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }


    public setColor(color){  // para establecer un color 
        this.color= color;
    }
    public getColor(){ // Para pedir el color
        return this.color;
    }
}
// Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha =capucha;
    }
    getCapucha(){
        return this.capucha;
    }
}


var camiseta = new Camiseta('Rojo', 'manga larga','nike','s', 12);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera('negro','manga corta', 'adidas', 'sd',23);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor('red');

console.log(sudadera_nike);


/*
camiseta.color='rojo';
camiseta.modelo='Cosa';
camiseta.marca='nike';
camiseta.talla='S';
camiseta.precio=22;
*/


/*
playera.color='verde';
playera.modelo='Cosa larga';
playera.marca='adidas';
playera.talla='M';
playera.precio=24;
*/
