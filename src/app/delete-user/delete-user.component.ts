import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit{
  userName:string = ''
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private userService:UserdataService){}
  ngOnInit(){
    this.userService.userById(this.data).subscribe((resp:any)=>{
      this.userName = resp.firstName + ' ' + resp.lastName
    })
  }
}
