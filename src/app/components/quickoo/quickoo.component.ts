import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Rafex Delivery',
  templateUrl: './Rafex Delivery.component.html',
  styleUrls: ['./Rafex Delivery.component.scss']
})
export class Rafex DeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle : boolean = false;


  slide : number = 0;

  slider(n : number){
    this.slide = n;
  }
  


}
