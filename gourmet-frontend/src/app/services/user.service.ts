import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiBase}/user`);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiBase}/user/${id}`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiBase}/user/admin/`, user);
  }

  update(id: number, user: User) {
    return this.http.put<User>(`${environment.apiBase}/user/admin/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiBase}/user/admin/${id}`);
  }
}
