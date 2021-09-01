import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string = '';
  message:string = '';
  now:Date = new Date();
  styleClass:string = '';

  constructor() {
    setInterval(
      ()=>{
        this.now = new Date();
        this.styleClass = this.styleClass =='red' ? '' : 'red'; 
        console.log(this.styleClass);
      }, 1000);
   }

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'This is My First Component!!';
    this.styleClass = 'red';
  }

  today() {
    return this.now.toLocaleString();
  }

}
