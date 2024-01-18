import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { UserdataService} from '../services/userdata.service'
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit{
  users:any;
  items:any;
  userDataSource!: MatTableDataSource<any>
constructor(private userData:UserdataService){

}
displayedColoumns:string[]=['id','name','email','phone','department','action']
@ViewChild(MatPaginator) paginator!:MatPaginator
@ViewChild(MatSort)sort!: MatSort
ngOnInit(): void {
  this.userData.users().subscribe((data:any)=>{
    console.log(data)
    this.userDataSource = new MatTableDataSource(data?.users)
    if(this.userDataSource){
      this.userDataSource.paginator = this.paginator
      this.userDataSource.sort = this.sort;
    }

  
  })
}
deleteUserData(id:number){
  this.userData.deleteUser(id).subscribe((result:any)=>{
    console.log(result)
  })
}
AfterViewInit(){
  if(this.userDataSource){
    this.userDataSource.paginator = this.paginator
    this.userDataSource.sort = this.sort;
  }}
}
