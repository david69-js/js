import { Component, OnInit, DoCheck, OnDestroy} from "@angular/core"; // Realizar nuestra primera clase, y de donde esta ubicada from || || 


@Component({ // e abre con ({})
   
    selector: "videojuego", // se utiliza para ser llamado en ell app.component...
    /*template://Es la plantilla que utilizamos para insertar en pantalla // Pero de debe de cargar en la html
    `
        <h2>Cargar de Componente Videojuego</h2>
        <ul>
            <li>Gta</li>
            <li>Mario Bros</li>
            <li>StarCraft</li>
            <li>Counter</li>
        </ul>
    `
    */
   templateUrl: "./videojuego.component.html"
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{ // Sirve para ser importado y declarado en module
    public titulo: string;
    public listado: string;
    
   
    constructor(){
        this.titulo = "Titutulo de los componentes";
        this.listado = "Listado de componentes";
        console.log('Ya cargo el compoenente de: VideojuegoComponent'); // No podemos realizar nada fuerar del contructor
    }
    ngOnInit(){
        console.log("OnInit ejecutado");
    }
    ngDoCheck(){
        console.log("DoCheck ejecuatado!!!");
    }
    ngOnDestroy(){
        console.log("OnDestroy ejecutado!!");
    }
    cambiarTitulo(){
        this.titulo= "Este es el nuevo titulo";
    }

};
