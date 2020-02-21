import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appArrow]'
})
export class ArrowDirective {

  constructor(private el: ElementRef) { 
    // this.el.nativeElement.innerHTML = '<span><i class="fa fa-arrow-down"></i></span>';
  }
  @HostListener('click') onClick() {
    debugger
    this.el.nativeElement.innerHTML = '<span><i class="fa fa-arrow-down"></i></span>';
  }
}
