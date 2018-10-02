import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostClick]'
})
export class HostClickDirective {
  @Input('appHostClick') size: number;

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('click') onclick() {
    this.render.setStyle(this.element.nativeElement, 'font-size', `${this.size}px`);
  }

}
