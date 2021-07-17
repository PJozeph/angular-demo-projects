import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirectiveDirective {

  constructor(private elementRef: ElementRef, private render : Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.addClass(this.elementRef.nativeElement, "open")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.removeClass(this.elementRef.nativeElement, "open");
  }
}
