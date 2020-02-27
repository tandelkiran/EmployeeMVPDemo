import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appArrow]'
})
export class ArrowDirective {

  @Input() flag = true;
  constructor(private element: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.flag = !this.flag
    if (this.flag) {
      this.element.nativeElement.innerHTML = '<span><i class="fa fa-arrow-down"></i></span>';
    }
    else {
      this.element.nativeElement.innerHTML = '<span><i class="fa fa-arrow-up"></i></span>';
    }
  }
}
