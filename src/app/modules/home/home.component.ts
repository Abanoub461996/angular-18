import { Component } from '@angular/core';
import { HomeCategoriesService } from '../../core/services/api/home-categories.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { Category } from '../../core/interfaces/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories$!: Observable<Category[]>;
  constructor(private homeCategory: HomeCategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.homeCategory.getHomeCategories();
  }
}
