import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  users: any;
  items: any;
  userDataSource!: MatTableDataSource<any>;
  userToken:any;
  constructor(private userData: UserdataService,private router:Router,private activatedRoute: ActivatedRoute, public dialog: MatDialog,private auth:AuthService) {

  }
  displayedColoumns: string[] = ['id', 'name', 'email', 'phone', 'department', 'action']
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  ngOnInit(): void {
   this.userToken = this.auth.getToken();
    this.userToken=atob(this.userToken.split('.')[1]);
    this.userToken=JSON.parse(this.userToken)
    this.userData.users().subscribe((data: any) => {
      console.log(data)
      this.userDataSource = new MatTableDataSource(data?.users)
      console.log(this.userDataSource)
      if (this.userDataSource) {
        this.userDataSource.paginator = this.paginator
        this.userDataSource.sort = this.sort;
      }


    })
  }
  
  deleteUserData(id: number) {
    this.userToken = this.auth.getToken();
    this.userToken=atob(this.userToken.split('.')[1]);
    this.userToken=JSON.parse(this.userToken);
    this.activatedRoute.params.subscribe((param: any) => {
      param['id'];
    
    if( this.userToken.role == 'user' && this.userToken.id != param['id']){
      this.router.navigateByUrl('get-user')
    }
    else{
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: id,
      height: '200px',
      width: '400px'
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'delete') {
        this.userData.deleteUser(id).subscribe((resp: any) => {
          console.log(resp)
        })
      }
    })

  }})}
  AfterViewInit() {
    if (this.userDataSource) {
      this.userDataSource.paginator = this.paginator
      this.userDataSource.sort = this.sort;
    }
  }
  logout(){
    this.auth.logout();
  }
}
