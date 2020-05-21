export class Zapatilla{
    /*
    public marca: string;
    public color: string;
    public nombre: string;
    public precio: number;
    public stock: boolean;

    constructor(marca, color, nombre, precio, stock){
        this.marca = marca;
        this.color = color;
        this.nombre = nombre;
        this.precio = precio;
        this.stock= stock;
    }
    */ // Esto aca es lo mismo que lo de abajo solo que menos redundante
    constructor(
        public marca: string,
        public color: string,
        public nombre: string,
        public precio: number,
        public stock: boolean, // Y menos codigo 
    ){}
}
