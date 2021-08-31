import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string | undefined;
  message:string | undefined;
  text1:string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'ngModelを使う';
    this.text1 = '';
  }

  today() {
    return new Date().toLocaleString();
  }

}
