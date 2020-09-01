import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quickoo',
  templateUrl: './quickoo.component.html',
  styleUrls: ['./quickoo.component.scss']
})
export class QuickooComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    location.reload();

  }


}
