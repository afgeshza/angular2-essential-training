import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[action]'
})
export class ActionDirective {

  @HostBinding('class.show-action') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
}
