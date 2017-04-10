import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpendingListComponent } from './spending-list.component';
import { SpendingFormComponent } from './spending-form.component';
import { AppService } from './app.service';
import { CurrencyPipe } from'./currency.pipe'
import { lookupListToken, lookupLists } from './providers';
import { routing } from './app.routing';
import { ActionDirective } from './action.directive';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    SpendingListComponent,
    SpendingFormComponent,
    CurrencyPipe,
    ActionDirective
  ],
  providers: [
    AppService,
    { provide: lookupListToken, useValue: lookupLists }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}