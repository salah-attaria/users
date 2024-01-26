import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewComponent } from './view/view.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { tokenAuthGuard } from './guards/token-auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    component: AddUserComponent,
    canActivate: [authGuardGuard, tokenAuthGuard],
    path: 'add-user',
    data: ['admin'],
  },
  {
    component: GetUsersComponent,

    canActivate: [authGuardGuard, tokenAuthGuard],
    path: 'get-user',
    data: ['admin', 'user'],
  },
  {
    component: LoginComponent,

    path: 'login',
    data: ['user', 'admin'],
  },

  {
    component: UpdateUserComponent,
    canActivate: [authGuardGuard, tokenAuthGuard],
    path: 'update-user/:id',
    data: ['admin'],
  },
  {
    component: ViewComponent,
    canActivate: [authGuardGuard, tokenAuthGuard],
    path: 'view-user/:id',
    data: ['admin', 'user'],
  },
  {
    component: ErrorComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
