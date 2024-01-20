import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from "./add-user/add-user.component"
import { GetUsersComponent } from "./get-users/get-users.component"
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewComponent } from './view/view.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { ShowUsersComponent } from './show-users/show-users.component';
const routes: Routes = [

  {
    component: AddUserComponent,
    canActivate: [authGuardGuard],
    path: 'add-user',
    data: ['admin']
  },{
    component:ShowUsersComponent,
    canActivate:[authGuardGuard],
    path:'show-user',
    data: ['admin', 'user']

  },

  {
    component: GetUsersComponent,
    canActivate: [authGuardGuard],
    path: 'get-user',
    data: ['admin']
  },
  {
    component: LoginComponent,
    path: 'login',
    data: ['admin', 'user'],

  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    component: UpdateUserComponent,
    canActivate: [authGuardGuard],
    path: 'update-user/:id',
    data: ['admin']

  },
  {
    component: ViewComponent,
    canActivate: [authGuardGuard],
    path: 'view-user/:id',
    data: ['admin', 'user']
  },
  {
    component: ErrorComponent,
    path: '**'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
