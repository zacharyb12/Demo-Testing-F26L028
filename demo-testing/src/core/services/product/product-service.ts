
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../feature/shared/models/product.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class ProductService {

 API_URL = "http://localhost:3000/product"

 httpClient = inject(HttpClient)

 getProduct() : Observable<Product[]>{
  return this.httpClient.get<Product[]>(this.API_URL);
 }


}
