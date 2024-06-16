import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category, Product } from '../../../core/interfaces/products';
import { Observable } from 'rxjs';
import { HomeCategoriesService } from '../../../core/services/api/home-categories.service';
import { CommonModule } from '@angular/common';
import { HomeCategoryProductsComponent } from './home-category-products/home-category-products.component';

@Component({
  selector: 'app-home-category',
  standalone: true,
  templateUrl: './home-category.component.html',
  styleUrl: './home-category.component.css',
  imports: [CommonModule,HomeCategoryProductsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCategoryComponent {
  @Input() category: any;
  categoryData$!: Observable<Product[]>;

  constructor(private homeCategory: HomeCategoriesService) {}
  ngOnInit(): void {
    this.categoryData$ = this.homeCategory.getHomeCategoryProducts(
      this.category.id
    );
  }
}
