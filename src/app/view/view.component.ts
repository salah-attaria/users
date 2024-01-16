import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute){

  }
  userId:any;
  ngOnInit(){
  this.userId=this.activatedRoute.snapshot.paramMap.get('id')
  console.log (this.userId)
  }
}
