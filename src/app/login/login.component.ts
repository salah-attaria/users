import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z\d]).{8,}$/)]),

  })
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login'])
    }
  }
  loginUser() {
    if (this.userData.valid) {
      this.auth.login(this.userData.value).subscribe((result: any) => {
        this.router.navigateByUrl('get-user')
      }, (err: Error) => {
        alert(err.message)
      this.router.navigate(['login'])
  
      })
    }
  }
}
