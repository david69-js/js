import { Component, OnInit } from '@angular/core';
import { UsuarioContaco } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public usuario : UsuarioContaco

  constructor() 
  {
    this.usuario = new UsuarioContaco('','','','')
  }

  ngOnInit(): void {
  
  }

  onSubmit(){
    console.log('lanzado');
    console.log(this.usuario);
  }

}
