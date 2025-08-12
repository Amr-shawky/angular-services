import { PostServices } from './../../Services/post-services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit{
  data:any[]=[];
  constructor(private postServices:PostServices){}
  ngOnInit(){
    console.log(this.postServices.get().subscribe((data:any)=>{
      this.data = data;
      console.log(data);
    }));
  }

}
