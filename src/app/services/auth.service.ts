import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  setToken(token: any) {
    let setToken = JSON.stringify(token);
    localStorage.setItem('token', setToken)
  };
  getToken(): any {
    let token = JSON.parse(localStorage.getItem('token') || '')
    return token
  }
  isLoggedIn() {
    return this.getToken() != null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
  login({ email, password }: any): Observable<any> {
    if ( email =='atuny0@sohu.com' &&password=='12345678'){
      this.setToken({id:1,role:'admin'});
      return of( {name:'admin',email:'atuny0@sohu.com'})
    }
    else if(email =='hbingley@ptala.or.jp' && password=='12345678'){
       this.setToken({id:2,role:'user'});
      return of( {name:'user',email:'hbingley@ptala.or.jp'})

    } {
      return throwError(new Error('failed to login'))
    }
}
}
