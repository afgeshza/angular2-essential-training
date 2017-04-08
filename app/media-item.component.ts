import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() preview = new EventEmitter;
  @Output() close = new EventEmitter;
  @Output() prev = new EventEmitter;
  @Output() next = new EventEmitter;

  onDelete() {
    console.log('deleted');
  }

  onPreview() {
    this.preview.emit(this.mediaItem);
  }

  onClose() {
    this.close.emit();
  }

  onPrev() {
    this.prev.emit();
      console.log(prev);
  }

  onNext() {
    this.next.emit();
      console.log(prev);
  }
}
