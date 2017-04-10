import { Routes, RouterModule } from '@angular/router';

import { SpendingListComponent } from './spending-list.component';
import { SpendingFormComponent } from './spending-form.component';

const appRoutes: Routes = [
  { path: 'form', component: SpendingFormComponent},
  { path: ':category', component: SpendingListComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
