import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBase}/category`);
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.apiBase}/category/admin/`, category);
  }

  delete(idCategory: number) {
    return this.http.delete(`${environment.apiBase}/category/admin/${idCategory}`);
  }
}
