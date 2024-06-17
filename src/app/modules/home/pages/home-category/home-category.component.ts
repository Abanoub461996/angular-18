import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category, Product } from '../../../../core/interfaces/products';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HomeCategoryProductsComponent } from './home-category-products/home-category-products.component';
import { Router } from '@angular/router';
import { HomeCategoriesService } from '../../home-categories.service';

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

  constructor(private homeCategory: HomeCategoriesService,private router:Router) {}
  ngOnInit(): void {
    this.categoryData$ = this.homeCategory.getHomeCategoryProducts(
      this.category.id
    );
  }
  selectCategory():void{
    this.router.navigate([`categories/${this.category.id}`]);
  }
}
