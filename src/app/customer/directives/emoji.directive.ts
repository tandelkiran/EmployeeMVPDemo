import { Directive, OnInit, ElementRef, Input, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
