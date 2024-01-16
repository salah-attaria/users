import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
constructor(private activatedRoute:ActivatedRoute){}
// userId:any;
// ngOnInit(): void {
//   this.userId=this.activatedRoute.snapshot.paramMap.get('id')
//   console.log(this.userId)
// }
@Input() id = '';

  ngOnInit(): void {
    console.log(this.id);
  }
}
