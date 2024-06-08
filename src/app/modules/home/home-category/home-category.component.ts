import { Component, Input } from '@angular/core';
import { Category, Products } from '../../../core/interfaces/products';
import { Observable } from 'rxjs';
import { HomeCategoriesService } from '../../../core/services/api/home-categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-category.component.html',
  styleUrl: './home-category.component.css',
})
export class HomeCategoryComponent {
  @Input() category: any;
  categoryData$!: Observable<Products[]>;

  constructor(private homeCategory: HomeCategoriesService) {}
  ngOnInit(): void {
    this.categoryData$ = this.homeCategory.getHomeCategoryProducts(
      this.category.id
    );
  }
}
