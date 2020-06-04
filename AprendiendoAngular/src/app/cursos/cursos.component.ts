import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit  {
    public nombre: string;
    public seguidores: number;

  constructor(
    private _rutActiva: ActivatedRoute, // Sirve para poder 
    private ruta: Router, //Sirve para poder redirigirse a otra pagina 
  ) { }

  ngOnInit(){
  
    this._rutActiva.params.subscribe((params: Params)=>{ // params para el parametro, y subscribe esta para recoger los datos 
      this.nombre = params['nombre']; // Para recoger que datos exactmanete queremos 
      this.seguidores = +params['seguidores'];

    console.log(this.nombre, this.seguidores);

    if(this.nombre == 'ninguno'){
      this.ruta.navigate(['home'])
    }

  });
}
  redirige(){
    this.ruta.navigate(['zapatillas'])
  }
}
