import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { GetUsersComponent } from './get-users/get-users.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewComponent } from './view/view.component';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { ShowUsersComponent } from './show-users/show-users.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    HeaderComponent,
    GetUsersComponent, DeleteUserComponent, AddUserComponent, UpdateUserComponent, AddUserDialogComponent, ViewComponent, ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    NgbModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule,
    HttpClientModule, FormsModule,
    ReactiveFormsModule, MatRadioModule, MatIconModule, MatDividerModule, MatButtonModule, MatDialogModule, MatCardModule, MatCheckboxModule,
    MatSelectModule, CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
