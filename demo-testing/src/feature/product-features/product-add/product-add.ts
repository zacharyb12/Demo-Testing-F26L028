import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../core/services/product/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {

  productForm : FormGroup;

  errorMessage = signal<string |null>(null)

  fb = inject(FormBuilder)
  productService = inject(ProductService)
  router = inject(Router)

  constructor(){
    this.productForm = this.fb.group({
      name : ['',[Validators.required]],
      description : ['',[Validators.required]],
      price : [0,[Validators.required]],
      quantity : [0,[Validators.required]],
      image : ['',[Validators.required]],
    })
  }

  onSubmit(){
    if(this.productForm.valid){
      this.productService.create(this.productForm.value).subscribe({
        next : (res) => {
          this.router.navigateByUrl('/product')
        },
        error : () =>{
          this.errorMessage.set("L'ajout à échoué")
        }
      })
    }
  }

}
