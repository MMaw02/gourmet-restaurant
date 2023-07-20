import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBase}/product`);
  }

  getProductsByName(name: string): Observable<Product[]> {
    const params = new HttpParams().set('name', name);

    return this.http.get<Product[]>(`${environment.apiBase}/product/search`, {params});
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiBase}/product/${id}`);
  }

  getByIdCategory(idCategory: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBase}/product/category/${idCategory}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiBase}/product/admin/`, product);
  }

  update(id: number, product: Product) {
    return this.http.put<Product>(`${environment.apiBase}/product/admin/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiBase}/product/admin/${id}`);
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiBase}/media/upload`, formData);
  }

  deleteFile(filename: string): Observable<any> {
    return this.http.delete(`${environment.apiBase}/media/delete/${filename}`);
  }
}
