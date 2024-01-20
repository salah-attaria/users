import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Inject, inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state): boolean => {
  debugger
  const authService: AuthService = inject(AuthService);
  let token: any = localStorage.getItem('token') || '';
  token = JSON.parse(token)
  let roles = [];
  let length = 2;

  for (let i = 0; i < length; i++) {
    if (route.data[i] != undefined) {
      roles.push(route.data[i])
    }
  }
  if (roles.includes(token.role)) {
    return true
  }
  alert('Only admin can access this page')
  return false;
};
