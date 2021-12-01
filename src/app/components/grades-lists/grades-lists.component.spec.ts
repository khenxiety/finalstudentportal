import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesListsComponent } from './grades-lists.component';

describe('GradesListsComponent', () => {
  let component: GradesListsComponent;
  let fixture: ComponentFixture<GradesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
