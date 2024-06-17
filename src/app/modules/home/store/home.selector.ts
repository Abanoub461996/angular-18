import { createSelector } from '@ngrx/store';
import { CategoriesState } from './home.reducer';
import { AppState } from '../../../core/store/app.state';

export const selectCat = (state: AppState) => state.homeCategories;
export const selectAllCategories = createSelector(selectCat, (state) => state);