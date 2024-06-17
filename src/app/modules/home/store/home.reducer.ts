import { createReducer, on } from '@ngrx/store';
import { Category } from '../../../core/interfaces/products';
import {
  loadHomeCategories,
  loadHomeCategoriesSuccess,
  loadHomeCategoriesFailure,
} from './home.actions';
enum LoadState {
    pending = "pending",
    loading = "loading",
    error ="error",
    success = "succes"
}

export interface CategoriesState {
  homeCategories: Category[];
  error: string | null;
  status: LoadState;
}
export const initialCatState: CategoriesState = {
  homeCategories: [],
  error: null,
  status: LoadState.pending,
};

export const CategoriesReducer = createReducer(
  initialCatState,
  on(loadHomeCategories, (state) => ({ ...state, status: LoadState.loading })),
  // Handle successfully loaded homeCategories
  on(loadHomeCategoriesSuccess, (state, { homeCategories }) => ({
      ...state,
      homeCategories: homeCategories,
      error: null,
      status: LoadState.success,
  })),
  on(loadHomeCategoriesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: LoadState.error,
})),
);
