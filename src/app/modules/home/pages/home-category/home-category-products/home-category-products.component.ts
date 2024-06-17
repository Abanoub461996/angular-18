import { Component, Input } from '@angular/core';
import { Product } from '../../../../../core/interfaces/products';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-category-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-category-products.component.html',
  styleUrl: './home-category-products.component.css'
})
export class HomeCategoryProductsComponent {
  @Input() product!:Product;
  constructor(private router:Router){}
  selectProduct():void{
    this.router.navigate([`products/${this.product.id}`]);
  }
}
