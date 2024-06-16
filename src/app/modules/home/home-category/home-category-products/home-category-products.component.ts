import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/interfaces/products';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home-category-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-category-products.component.html',
  styleUrl: './home-category-products.component.css'
})
export class HomeCategoryProductsComponent {
  @Input() product!:Product;


}
