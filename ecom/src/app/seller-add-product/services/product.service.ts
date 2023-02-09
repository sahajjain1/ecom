import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  addProduct(data: any) {
    console.log("service called");
    return this.http.post('http://localhost:3000/products', data);
  }
  productList() {
    return this.http.get('http://localhost:3000/products');
  }

  deleteProduct(id: number) {
   return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}

