import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  // standalone: true
})
export class Highlight {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'purple';
  }
}
