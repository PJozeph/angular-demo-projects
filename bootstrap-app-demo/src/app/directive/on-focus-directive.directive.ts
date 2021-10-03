import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onFocus]'
})
export class OnFocusDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.onFocus('0.2rem solid #0d6efd');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.onFocus('');
  }

  private onFocus(style: string) {
    this.elementRef.nativeElement.style.borderLeft = style;
  }

}
