import {Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const tokenAuthGuard: CanActivateFn = (route, state): boolean => {
  let token: any = localStorage.getItem('token' || '');
  const router:Router = inject(Router)
  if (token) {
    return true

  } else {
    router.navigateByUrl('/')
    return false;

  }

};
