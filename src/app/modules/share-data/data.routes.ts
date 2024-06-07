import { Routes } from '@angular/router';
import { ShareDataComponent } from './share-data.component';

export const DATA_ROUTES: Routes = [
  {
    path: '',
    component: ShareDataComponent,
    children: [
      {
        path: ':id',
        component: ShareDataComponent,
      },
    ],
  },
];
