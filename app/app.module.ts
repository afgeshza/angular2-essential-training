import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { PopupComponent } from './popup.component';
import { PopupDirective } from './popup.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    PopupComponent,
    PopupDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}