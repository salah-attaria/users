import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: any;
  userData:FormGroup = this.fb.group({
    firstName: new FormControl('firstName'),
    lasttName: new FormControl('lasttName'),
    email: new FormControl('email'),
    gender: new FormControl('gender'),
    department: new FormControl('department'),
    university: new FormControl('university'),
    phone: new FormControl('phone'),
    password: new FormControl('password')



  });
  constructor(private getUserData: UserdataService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getUserData.users().subscribe((data: any) => {
      this.users = data
    })


  }
  getUser() {
    let data = this.userData.value
    console.log('userdata', data)
    this.getUserData.saveUser(data).subscribe((result)=>{
      console.warn (result)

    })

  }
}
