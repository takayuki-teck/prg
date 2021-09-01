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
  count:number = 0;
  input:string = '';
  visible:boolean = true;
  data:string[] = [];

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
    this.data = [
      '最初の項目です',
      '2番目の項目です',
      '最後の項目です'
    ]
  }

  today() {
    return this.now.toLocaleString();
  }

  doClick() {
    this.message = ++this.count + "回、クリックしました。"
    this.visible = !this.visible;
  }

  doType(val:string) {
    this.input = val;
    this.message = 'you type: ' + this.input;
  }

}
