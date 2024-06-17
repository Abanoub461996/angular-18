import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home.component';
import { CategoryProductsComponent } from './modules/category-products/category-products.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CategoriesReducer } from './modules/home/store/home.reducer';
import { HomeCategriesEffect } from './modules/home/store/home.effects';
import { EffectsModule } from '@ngrx/effects';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  {
    path: 'categories',
    component: HomeComponent,
    providers: [
      importProvidersFrom(
        // register feature reducer
        StoreModule.forFeature('categories', CategoriesReducer),
        // run feature effects
        EffectsModule.forFeature([HomeCategriesEffect])
      ),
    ],
    children: [
      {
        path: ':id',
        component: CategoryProductsComponent,
      },
    ],
  },
  
];
