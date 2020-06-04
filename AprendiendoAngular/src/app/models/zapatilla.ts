export class Zapatilla{
   /*
    marca:string;
    nombre:string;
    color:string;
    precio:string;
    stock: boolean;
    
    constructor(marca,nombre,color,precio, stock){ // Esto es muy  redundate, hay una mejor forma de hacerlo y mas corto
        this.marca = marca;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.stock = stock; 
    }
*/
constructor(
    public marca:string, // Se utilzan ','  y ya no se utilizan los ";" 
    public nombre:string,
    public color:string,
    public precio:number,
    public stock: boolean
){}

}