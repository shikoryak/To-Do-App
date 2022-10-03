import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-edit-todo-dialog',
  templateUrl: './add-edit-todo-dialog.component.html',
  styleUrls: ['./add-edit-todo-dialog.component.scss']
})
export class AddEditTodoDialogComponent implements OnInit {
  @Input() title: string = '';

  @Output() onSave: EventEmitter<string> = new EventEmitter();

  toDoTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSaveTodo(): void {
    this.onSave.emit(this.toDoTitle)
  }

}
