import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdvisoriesComponent } from './student-advisories.component';

describe('StudentAdvisoriesComponent', () => {
  let component: StudentAdvisoriesComponent;
  let fixture: ComponentFixture<StudentAdvisoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdvisoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdvisoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
