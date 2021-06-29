import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAppComponent } from './status-app.component';

describe('StatusAppComponent', () => {
  let component: StatusAppComponent;
  let fixture: ComponentFixture<StatusAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
