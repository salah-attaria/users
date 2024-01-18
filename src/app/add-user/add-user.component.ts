import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: any;
  userData:FormGroup = this.fb.group({
    firstName: new FormControl('firstName',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    lasttName: new FormControl('lasttName',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    email: new FormControl('email',[Validators.required,Validators.pattern( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ )]),
    gender: new FormControl('gender'),
    department: new FormControl('department',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
    university: new FormControl('university',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
    phone: new FormControl('phone',[Validators.required,Validators.pattern(/^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/)]),
    password: new FormControl('password',[Validators.required,Validators.pattern(/^(?=.*[a-zA-Z\d]).{8,}$/)])



  });
  constructor(private getUserData: UserdataService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getUserData.users().subscribe((data: any) => {
      this.users = data
      console.log(data)
    })


  }
  getUser() {
    let data = this.userData.value
    console.log('userdata', data)
    // this.getUserData.saveUser(data).subscribe((result)=>{
    //   console.warn (result)

    // })

  }
}
