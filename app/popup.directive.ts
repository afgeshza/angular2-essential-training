import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[imgShow]'
})
export class PopupDirective {
  @HostBinding('class.visible-img') visible = true;
  @Input() set imgShow(value) {
    this.visible = value;
  }
}