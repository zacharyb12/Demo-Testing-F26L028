import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRouter } from './product-router';

describe('ProductRouter', () => {
  let component: ProductRouter;
  let fixture: ComponentFixture<ProductRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRouter],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductRouter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
