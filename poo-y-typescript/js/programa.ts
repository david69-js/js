// Definir un modulo
module Tienda{
   export class Ropa{
        constructor(public titulo: string) {
            alert(titulo);
        }
    }
    export class Informatica{
        constructor(public titulo: string) {
            alert(" Tienda de Informarica "+titulo);
        }
    }
    
}
import Informarica = Tienda.Informatica;
var cargar_informatica = new Informarica(' Esta es la Tienda de Tecnologia');

// Decorador
function arranque(lanzar: string){
    return function(targer: Function){
        targer.prototype.lanzamiento = function(): void{
            alert(lanzar);
        }
    }
}
@arranque('Lanzamiento de Angular y Node JS ')
class Programa {
    public nombre: string;
    public version: number;
    
    setNombre(nombre){
        this.nombre = nombre;
    }
    
    getNombre(){
        return this.nombre;
    }

    setVersion(version){
        this.version = version;
    }
    
    getVersion(): number{
        return this.version;
    }


}
// Asi se realiza una herencia de padrea hija 

class EditorVideo extends Programa{
    public timeline: number;

    setTimeline(timeline){
        this.timeline = timeline;
    }
    
    getTimeline(): number{
        return this.timeline;
    }

    getAlldata(){
        return 'El nombre es del programa es : '+this.nombre+', La version es : '+this.version+', El Time line es : '+this.timeline;
    }
}

var programa = new Programa();
programa.lanzamiento();

var editor = new EditorVideo();

editor.setNombre("Kari");
editor.setVersion(12);
editor.setTimeline(12);

console.log(editor.getAlldata());

// Logica del Formulario
var programas =[];

function guardar(){
    
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    var version = (<HTMLInputElement>document.getElementById("version")).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(version);
    
    programas.push(programa)

    var list = "";
    for(var i = 0; i <= programas.length-1; i++){
        list = list+"<li>"+"Programa: "+programas[i].getNombre()+", Version: "+ programas[i].getVersion()+"</li>";
        console.log(programas)
    }
    var listado = (<HTMLElement>document.getElementById("listado"));
    listado.innerHTML= list;
    
    nombre = (<HTMLInputElement>document.getElementById("nombre")).value = '';
    version = (<HTMLInputElement>document.getElementById("version")).value = '';
}