import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../services/userdata.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userDataForm:FormGroup = this.fb.group({
    firstName: new FormControl('firstName'),
    lastName: new FormControl('lastName'),
    email: new FormControl('email'),
    gender: new FormControl('gender'),
    department: new FormControl('department'),
    university: new FormControl('university'),
    phone: new FormControl('phone'),
    password: new FormControl('password')
  });
  
  user: any;
  constructor(private route: ActivatedRoute, private userData: UserdataService, private fb:FormBuilder) { }
  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      param['id'];
      this.userData.userById( param['id']).subscribe((resp:any)=>{
        // console.log('user data by id',resp)
        this.user=resp
        console.log(this.user)
      })
    })

  }
  getUser() {
    let data = this.userDataForm.value
    console.log('userdata', data);
  

    // this.userData.saveUser(data).subscribe((result)=>{
    //   console.warn (result)
    // })


  }
}
