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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),

  })
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
   
  }
  loginUser() {
    if (this.userData.valid) {
      this.auth.login(this.userData.value).subscribe((result: any) => {
        this.router.navigateByUrl('get-user')
      },
       (err: Error) => {
        alert(err.message)
      this.router.navigate(['login'])
  
      })
    }
  }
}
