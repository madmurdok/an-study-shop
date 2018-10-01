import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective {
  @Input('appSetBackground') color: string;

  @HostBinding('style.border') border: string;

  private element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
   }

  @HostListener('mouseenter')
  onMouseEnter () {
    this.highlight(this.color || 'grey');
    this.border = '1px solid darkgrey';
  }
  @HostListener('mouseleave')
  onMouseLeave () {
    this.highlight(null);
    this.border = 'none';
  }

  private highlight(color: string) {
    this.element.style.backgroundColor = color;
  }

}
