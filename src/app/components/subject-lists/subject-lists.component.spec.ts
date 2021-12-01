import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectListsComponent } from './subject-lists.component';

describe('SubjectListsComponent', () => {
  let component: SubjectListsComponent;
  let fixture: ComponentFixture<SubjectListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
