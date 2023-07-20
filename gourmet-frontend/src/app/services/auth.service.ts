import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredentials } from '../interfaces/userCredentials.interface';
import { Observable, map, ReplaySubject, mergeMap, tap, shareReplay } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private current?: User;
  private authenticationState = new ReplaySubject<User>(1);
  private accountCache$?: Observable<User>;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    if (this.isAuthenticated()) {
      this.getMyAccount().subscribe();
    }
  }

  login(creds: UserCredentials): Observable<User> {
    return this.getToken(creds).pipe(mergeMap(() => this.getMyAccount()));
  }

  getToken(creds: UserCredentials): Observable<any> {
    return this.http.post(`${environment.apiBase}/api/authenticate`, creds, {
      observe: 'response'
    })
    .pipe(map((response: HttpResponse<any>) => {
      const headers = response.headers;
      const body = response.body;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer', '');

      this.localStorageService.store('token', token);

      return body;
    }))
  }


  getMyAccount(): Observable<User> {
    if (!this.accountCache$) {
      this.accountCache$ = this.http.get<User>(`${environment.apiBase}/account/me`)
      .pipe(tap((user) => {
        this.current = user;
        this.authenticationState.next(this.current);
        return this.current;
      }),
      shareReplay()
      );
    }

    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    return !!this.localStorageService.retrieve('token');
  }

  getAuthenticationState(): Observable<User> {
    return this.authenticationState.asObservable();
  }

  isAdmin(): boolean {
    return this.current?.userType == 'ADMIN';
  }

  logout() {
    this.localStorageService.clear('token');
    this.current = undefined;
    this.accountCache$ = undefined;
  }

  signup(user: User) {
    return this.http.post(`${environment.apiBase}/account/signup`, user);
  }
}
