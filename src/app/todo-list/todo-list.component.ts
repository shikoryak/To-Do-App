import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  isAddDialogOpen: boolean = false;
  isEditDialogOpen: boolean = false;
  isRemovingDialogOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSaveTodo(title: string): void {

  }

}
