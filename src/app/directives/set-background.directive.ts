import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective {
  @Input('highlight') color: string;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter () {
    this.highlight(this.color || 'grey');
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
