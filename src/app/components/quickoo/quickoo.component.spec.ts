import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rafex DeliveryComponent } from './Rafex Delivery.component';

describe('Rafex DeliveryComponent', () => {
  let component: Rafex DeliveryComponent;
  let fixture: ComponentFixture<Rafex DeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rafex DeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rafex DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
