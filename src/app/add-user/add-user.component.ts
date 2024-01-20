import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: any;
  userData:FormGroup = this.fb.group({
    firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    lasttName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    email: new FormControl('',[Validators.required,Validators.pattern( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ )]),
    gender: new FormControl('',[Validators.required]),
    department: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
    university: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/)]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-zA-Z\d]).{8,}$/)]),
    terms: new FormControl('',[Validators.requiredTrue])



  });
  constructor(private getUserData: UserdataService, private fb:FormBuilder,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getUserData.users().subscribe((data: any) => {
      this.users = data
      console.log(data)
    })


  }
  
  
  getUser() {
   if(!this.userData.invalid){
    const dialogRef=this.dialog.open(AddUserDialogComponent,{
      height:'300px',
      width:'500px',
     })
     dialogRef.afterClosed().subscribe((result:any)=>{
      if(result=='add'){
        let data = this.userData.value
        console.log('userdata', data)
        this.getUserData.saveUser(data).subscribe((result)=>{
          console.warn (result)
    
        })
      }
     })
   }

  }
}
