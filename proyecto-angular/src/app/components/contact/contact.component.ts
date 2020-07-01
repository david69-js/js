import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  public widthSlider: number;
  public anchuraToSlider:any;
  @ViewChild('textos', {static: false}) textos: ElementRef;

  constructor() { }

  ngAfterViewInit(){
    console.log(this.textos.nativeElement.textContent)
  }

  ngOnInit(): void {
    //Asi se hacia antes lo de las vistas 
    var opcion_clasica = document.querySelector('#texto').innerHTML;
  }
  carga(){
    this.anchuraToSlider = this.widthSlider;
  }
  resetear(){
    this.anchuraToSlider = false;
  }
  

  
}
