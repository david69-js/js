import { Component, OnInit, Input } from '@angular/core';
declare var $:any;


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  

  constructor() { }

  ngOnInit(): void {


      $('.galeria').bxSlider({
        slideWidth: this.anchura,
        mode: 'fade',
        captions: false,
      });
  }

}
