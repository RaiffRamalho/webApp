import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmmiterComponent } from './event-emmiter.component';

describe('EventEmmiterComponent', () => {
  let component: EventEmmiterComponent;
  let fixture: ComponentFixture<EventEmmiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmmiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmmiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
