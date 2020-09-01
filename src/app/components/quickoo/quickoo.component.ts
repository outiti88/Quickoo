import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quickoo',
  templateUrl: './quickoo.component.html',
  styleUrls: ['./quickoo.component.scss']
})
export class QuickooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle : boolean = false;


  slide : number = 0;

  slider(n : number){
    this.slide = n;
  }
  


}
