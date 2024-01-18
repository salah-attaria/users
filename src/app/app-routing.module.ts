import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from "./add-user/add-user.component"
import { GetUsersComponent } from "./get-users/get-users.component"
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    component: AddUserComponent,
    path: 'add-user'
  },

  {
    component: GetUsersComponent,
    path: ''
  },
  {
    component: UpdateUserComponent,
    path: 'update-user/:id'
  },
  {
    component: ViewComponent,
    path: 'view-user/:id'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
