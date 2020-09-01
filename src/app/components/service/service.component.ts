import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit , OnDestroy {

  constructor() { 
  
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    location.reload();

  }

}
