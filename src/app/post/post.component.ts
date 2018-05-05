import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

post=[];
  constructor() { 
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => this.post = data)
  .catch((err)  =>console.log(err))
  }

  ngOnInit() {
  }

}
