import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBContactComponent } from './task-b-contact.component';

describe('TaskBContactComponent', () => {
  let component: TaskBContactComponent;
  let fixture: ComponentFixture<TaskBContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
