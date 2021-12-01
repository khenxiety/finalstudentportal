import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSchedComponent } from './print-sched.component';

describe('PrintSchedComponent', () => {
  let component: PrintSchedComponent;
  let fixture: ComponentFixture<PrintSchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
