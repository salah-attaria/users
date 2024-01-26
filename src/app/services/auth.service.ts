import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { tokens } from '../token-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  setToken(token: any) {
    localStorage.setItem('token', token)
  };
  getToken(): any {
    return localStorage.getItem('token') || '';
  }
  isLoggedIn() {
    return this.getToken() != null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
  login({ email, password }: any): Observable<any> {
    if (email == 'admin@localhost' && password == '1234') {
      this.setToken(tokens.admin);
      return of({ name: 'admin', email: 'admin@localhost' })
    }
    else if (email == 'user@localhost' && password == '1234') {
      this.setToken(tokens.user);
      return of({ name: 'user', email: 'user@localhost' })
    }

    return throwError(new Error('failed to login'))

  }
  testing(a:string){
    console.log('test',a)
  }
}
