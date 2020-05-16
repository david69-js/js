// Tipos de dato String
var cadena: string | number= "Hola nenas"; // la | siver como o tal cosa
cadena = 23;
//Tipo de dato number
var numero: number = 2

// Tipo de dato boolean
var verdadero_falso:boolean =false;

// Tipo de dato Any
var cualquiera:any ='hola';
cualquiera=32; // puede forzar a que no sea tipado fuerte 

// Definir arrays 

var lenguajes: Array<string> =['hola','nada','raios' ];

var numero2: any[] = [1,3,4,42,'asd','asda']

console.log(cadena, numero,verdadero_falso,cualquiera,lenguajes, numero2);