import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../services/userdata.service'
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateDataForm: FormGroup = this.fb.group({
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
  constructor(private route: ActivatedRoute, private userData: UserdataService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      param['id'];
      this.userData.userById(param['id']).subscribe((resp: any) => {
        // console.log('user data by id',resp)

        this.updateDataForm = new FormGroup({
          firstName: new FormControl(resp.firstName,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
          lastName: new FormControl(resp.lastName,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
          email: new FormControl(resp.email,[Validators.required,Validators.pattern( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ )]),
          gender: new FormControl(resp.gender),
          department: new FormControl(resp.company.department,[Validators.required]),
          university: new FormControl(resp.university,[Validators.required]),
          phone: new FormControl(resp.phone,[Validators.required,Validators.pattern(/^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/)]),
          password: new FormControl(resp.password,[Validators.required,Validators.pattern(/^(?=.*[a-zA-Z\d]).{8,}$/)])
        })
      })
    })

  }
  updateDataUser() {
    let data = this.updateDataForm.value
    console.log('userdata', data);
    this.userData.updateUser(this.route.snapshot.params['id'], this.updateDataForm.value).subscribe((result:any)=>{
      console.log(result)
    })

   


  }
}
