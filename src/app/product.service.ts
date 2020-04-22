import { Injectable } from '@angular/core';
import { Product } from './Product';
import { data } from './MockData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  // products = data;
  api = 'https://5e7d60cdfa19eb001651997a.mockapi.io/product';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
    // return this.products;

  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
  }
  removeProduct(id): Observable<Product>{
  //  return this.http.post<Product>(`${this.api}`, product);
  return this.http.delete<Product>(`${this.api}/${id}`);

  }

  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'https://ass1-quanndph088.stackblitz.io/home';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }
}