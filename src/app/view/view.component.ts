import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../services/userdata.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { JsonPipe } from '@angular/common';
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
  userToken: any
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userData: UserdataService, private fb: FormBuilder, private authService: AuthService,) { }
  ngOnInit(): void {
    this.userToken = this.authService.getToken()
    this.userToken = atob(this.userToken.split('.')[1])
    this.userToken = JSON.parse(this.userToken)
    this.activatedRoute.params.subscribe((param: any) => {
      param['id'];

      if (this.userToken.role == 'user' && this.userToken.id != param['id']) {
        this.router.navigateByUrl('get-user')
      }
      else {
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
      }

    })

  }




}

