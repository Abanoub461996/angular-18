import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HomeCategoryComponent } from './modules/home/home-category/home-category.component';
import { CategoryProductsComponent } from './modules/category-products/category-products.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  {
    path: 'categories',
    component: HomeComponent,
  },
  {
    path: 'categories/:id',
    component: CategoryProductsComponent,
  },
];
