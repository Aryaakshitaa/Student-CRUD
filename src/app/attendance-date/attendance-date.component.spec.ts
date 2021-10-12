import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDateComponent } from './attendance-date.component';

describe('AttendanceDateComponent', () => {
  let component: AttendanceDateComponent;
  let fixture: ComponentFixture<AttendanceDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
