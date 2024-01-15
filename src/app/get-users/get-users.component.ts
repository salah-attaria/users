import { Component, OnInit } from '@angular/core';
import { UserdataService} from '../services/userdata.service'
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit{
  users:any;
constructor(private userData:UserdataService){
  this.userData.users().subscribe((data)=>{
    console.log(data)
    this.users=data
  })
}
displayedcoloumns:string[]=['full_name','email','phone','department','password','university','gender,username']

ngOnInit(): void {
  
}
}
