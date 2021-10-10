import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[onFocus]'
})
export class OnFocusDirective {

  private currentBackground : string = '';

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.currentBackground = this.elementRef.nativeElement.style.backgroundColor;
    this.elementRef.nativeElement.style.backgroundColor = 'lightBlue'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = this.currentBackground;
  }

}
