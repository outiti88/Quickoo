import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDevisComponent } from './single-devis.component';

describe('SingleDevisComponent', () => {
  let component: SingleDevisComponent;
  let fixture: ComponentFixture<SingleDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
