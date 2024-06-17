import { createAction, props } from '@ngrx/store';
import { Category } from '../../../core/interfaces/products';

export const enum HomeCategoriesActions {
  GET_HOME_CATEGORIES = '[homeCategories] GET_HOME_CATEGORIES',
  GET_HOME_CATEGORIES_SUCCESS = '[homeCategories] GET_HOME_CATEGORIES_SUCCESS',
  GET_HOME_CATEGORIES_FAILURE = '[homeCategories] GET_HOME_CATEGORIES_FAILURE',
  GET_HOME_CATEGORY_SAMPLES = '[homeCategories] GET_HOME_CATEGORY_SAMPLES',
}
export const loadHomeCategories = createAction(
  HomeCategoriesActions.GET_HOME_CATEGORIES
);
export const loadHomeCategoriesSuccess = createAction(
  HomeCategoriesActions.GET_HOME_CATEGORIES_SUCCESS,
  props<{ homeCategories: Category[] }>()
);

export const loadHomeCategoriesFailure = createAction(
    HomeCategoriesActions.GET_HOME_CATEGORIES_FAILURE,
  props<{ error: string }>()
);
export const getHomeCategoryProducts = createAction(
  HomeCategoriesActions.GET_HOME_CATEGORY_SAMPLES,
  props<any>()
);
