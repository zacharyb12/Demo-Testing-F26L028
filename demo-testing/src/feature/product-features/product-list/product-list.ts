import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../../core/services/product/product-service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit{

  products = signal<Product[]>([])

  productService = inject(ProductService)
  
  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next : (res) => {
        this.products.set(res)
      }
    })
  }
}
