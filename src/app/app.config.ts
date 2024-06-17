import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { globalInterceptor } from './core/interceptors/global.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {  StoreModule } from '@ngrx/store';
import { CategoriesReducer } from './modules/home/store/home.reducer';
import { EffectsModule } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([globalInterceptor])), provideAnimationsAsync(),
    importProvidersFrom(StoreModule.forRoot({categories: CategoriesReducer}),EffectsModule.forRoot([]) ),
  ],
};
