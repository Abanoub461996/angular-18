import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeCategoriesService } from '../home-categories.service';
import { catchError, map, switchMap, mergeMap, of, toArray, from } from 'rxjs';
import { loadHomeCategories, loadHomeCategoriesSuccess, loadHomeCategoriesFailure } from './home.actions';

@Injectable()
export class HomeCategriesEffect {
  constructor(
    private actions$: Actions,
    private homeCategoriesService: HomeCategoriesService
  ) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHomeCategories),
      switchMap(() =>
        this.homeCategoriesService.getHomeCategories().pipe(
          // Use mergeMap to handle the nested observable for each category
          mergeMap((categories) => 
            // Map over categories and fetch products for each
            from(categories).pipe(
              mergeMap((category:any) =>
                this.homeCategoriesService.getHomeCategoryProducts(category?.id).pipe(
                  map((products) => ({
                    ...category,
                    products: products,
                  })),
                  catchError((error) => of(loadHomeCategoriesFailure({ error })))
                )
              ),
              // Collect all categories with their products
              toArray(),
              map((categoriesWithProducts) => loadHomeCategoriesSuccess({ homeCategories: categoriesWithProducts })),
            )
          ),
          catchError((error) => of(loadHomeCategoriesFailure({ error })))
        )
      )
    )
  );
}
