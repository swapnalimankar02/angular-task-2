import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAFormComponent } from './task-a-form.component';

describe('TaskAFormComponent', () => {
  let component: TaskAFormComponent;
  let fixture: ComponentFixture<TaskAFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
