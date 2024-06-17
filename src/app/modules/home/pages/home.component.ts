import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Category } from '../../../core/interfaces/products';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { HomeCategoriesService } from '../home-categories.service';
import { Store, select } from '@ngrx/store';
import { loadHomeCategories } from '../store/home.actions';
import { selectAllCategories, selectCat } from '../store/home.selector';
import { CategoriesState } from '../store/home.reducer';
import { AppState } from '../../../core/store/app.state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories$!: Observable<any>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadHomeCategories());
    this.categories$ = this.store.pipe(select(selectAllCategories));
    this.categories$.subscribe(categories => {
      console.log(categories);
    });
  }
}
