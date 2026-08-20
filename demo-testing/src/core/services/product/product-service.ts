
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProduct, Product, UpdateProduct } from '../../../feature/shared/models/product.model';
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

 getById(id : number) : Observable<Product>{
  return this.httpClient.get<Product>(`${this.API_URL}/${id}`)
 }

 create(newProduct : CreateProduct) : Observable<Product>{
  return this.httpClient.post<Product>(`${this.API_URL}`,newProduct)
 }

 update(updatedProduct : UpdateProduct , id : number) : Observable<Product>{
  return this.httpClient.put<Product>(`${this.API_URL}/${id}`,updatedProduct)
 }

 delete(id : number): Observable<Product>{
  return this.httpClient.delete<Product>(`${this.API_URL}/${id}`)
 }
}
