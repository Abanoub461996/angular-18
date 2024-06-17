import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectorRef, importProvidersFrom } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoaderComponent } from './core/shared-components/loader/loader.component';
import { LoaderService } from './core/services/loader.service';
import { Observable, Subscription } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { CategoriesReducer } from './modules/home/store/home.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent,StoreModule,],
  providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-18';
  private loaderSubscription!: Subscription;
  public isLoading: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
    this.loaderSubscription = LoaderService.loaderVisibility.subscribe(
      (isVisible: boolean) => {
        this.isLoading = isVisible;
        this.cdRef.detectChanges(); // Manually trigger change detection
      }
    );
  }
  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed
    if (this.loaderSubscription) {
      this.loaderSubscription.unsubscribe();
    }
  }
}
