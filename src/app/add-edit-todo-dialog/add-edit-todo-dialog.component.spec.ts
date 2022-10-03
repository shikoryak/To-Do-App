import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTodoDialogComponent } from './add-edit-todo-dialog.component';

describe('AddEditTodoDialogComponent', () => {
  let component: AddEditTodoDialogComponent;
  let fixture: ComponentFixture<AddEditTodoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTodoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
