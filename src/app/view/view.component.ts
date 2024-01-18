import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../services/userdata.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
  })
export class ViewComponent implements OnInit {
  viewDataForm: FormGroup = this.fb.group({
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

        this.viewDataForm = new FormGroup({
          firstName: new FormControl(resp.firstName),
          lastName: new FormControl(resp.lastName),
          email: new FormControl(resp.email),
          gender: new FormControl(resp.gender),
          department: new FormControl(resp.company.department),
          university: new FormControl(resp.university),
          phone: new FormControl(resp.phone),
          password: new FormControl(resp.password)
        })
      })
    })

  }
  
   


  }

