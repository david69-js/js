import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
 public nombre: string;
 public seguidores: number;
 public identificado:boolean;

  constructor(
    private _rutaActiva : ActivatedRoute, // Para 
    private _Router : Router, // sirver para redirigir
  ) {
    this.identificado = false;
  }

  ngOnInit(){
  this._rutaActiva.params.subscribe((params: Params)=>{
  
      this.nombre = params.nombre;
      this.seguidores = +params.seguidores;
    
      console.log(this.nombre, this.seguidores);

      if(this.nombre == 'ninguno'){
        this._Router.navigate(['home']);
      }
  })
  }

  redirige(){
    this._Router.navigate(['zapatillas']);
  }

  registro(value){
    this.identificado = value;
  }
}
