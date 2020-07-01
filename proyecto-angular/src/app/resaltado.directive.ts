import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {

   }

   ngOnInit(){
    var element = this.el.nativeElement;
        element.style.background = 'red';
        element.style.padding = '20px';
        element.style.marginTop = '29px';
        element.style.width = '25%';

      element.innerText = element.innerText.toUpperCase().replace('CUALQUIER','?//?>?');
   }
}
