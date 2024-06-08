import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryProductsComponent } from './home-category-products.component';

describe('HomeCategoryProductsComponent', () => {
  let component: HomeCategoryProductsComponent;
  let fixture: ComponentFixture<HomeCategoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCategoryProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
