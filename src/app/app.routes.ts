import { Routes } from '@angular/router';
import { ShareDataComponent } from './modules/share-data/share-data.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/share-data/data.routes').then((mod) => mod.DATA_ROUTES),
  },
];
