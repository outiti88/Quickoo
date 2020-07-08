import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickooComponent } from './quickoo.component';

describe('QuickooComponent', () => {
  let component: QuickooComponent;
  let fixture: ComponentFixture<QuickooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
