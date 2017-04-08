import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
  @Input() popupItem;
  @Output() close = new EventEmitter();
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  index = 0;

  closePopup() {
    this.close.emit();
  }

  prevImg() {
    this.prev.emit();
  }

  nextImg() {
    this.prev.emit();
  }
}
