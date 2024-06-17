import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, delay, filter, map } from 'rxjs';
import { HomeCategoriesService } from '../home/home-categories.service';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css',
})
export class CategoryProductsComponent {
  constructor(
    private route: ActivatedRoute,
    private homeCategory: HomeCategoriesService
  ) {
    route.params.pipe(
      map((p) => p['id']),
      filter((name: string) => !!name),
      concatMap((name: string) => {
        return this.homeCategory.getHomeCategoryProducts(name).pipe(
          map((categoryProducts) => {
            console.log(categoryProducts);
          }),
          delay(500)
        );
      })
    );
  }
  ngOnInit() {}
}
