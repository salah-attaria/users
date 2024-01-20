import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  users: any;
  items: any;
  userDataSource!: MatTableDataSource<any>
  constructor(private userData: UserdataService, public dialog: MatDialog,private auth:AuthService) {

  }
  displayedColoumns: string[] = ['id', 'name', 'email', 'phone', 'department', 'action']
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  ngOnInit(): void {
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

  }
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
