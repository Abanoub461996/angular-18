import { createSelector } from '@ngrx/store';
import { CategoriesState } from './home.reducer';
import { AppState } from '../../../core/store/app.state';

export const selectCat = (state: AppState) => state.categories;

export const selectAllCategories = createSelector(selectCat, (state: CategoriesState) => state.homeCategories);
