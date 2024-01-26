import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state): boolean => {
  let token: any = localStorage.getItem('token') || '';
  const location:Location = inject(Location);
  let roles = [];
  let length = 2;
  if(token){
    token=atob(token.split('.')[1]);
    token=JSON.parse(token);
    for (let i = 0; i < length; i++) {
      if (route.data[i] != undefined) {
        roles.push(route.data[i])
      }
    }
  }
  if (roles.includes(token.role)) {
    return true
  }else{
   location.back()
    return false;
  }

  
};
