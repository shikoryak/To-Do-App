import { Component, OnInit } from '@angular/core';
import { CreateAccountService } from '../create-account/create-account.service';
import { TodoItem, TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  isAddDialogOpen: boolean = false;
  isEditDialogOpen: boolean = false;
  isRemovingDialogOpen: boolean = false;

  todoList: TodoItem[] = [];
  selectedTodo: TodoItem | undefined;

  constructor(
    private todoService: TodoListService,
    private createAccountService: CreateAccountService
  ) {
    this.getTodoList()
  }

  ngOnInit(): void {
  }

  getTodoList(): void {
    this.todoService.getAll().subscribe(
      (todoList) => {
        this.todoList = todoList;
      }
    );
  }

  onSaveTodo(title: string): void {
    if (!title) return;

    const body = {
      userId: this.createAccountService.userId,
      title,
      completed: false
    };
    this.todoService.add(body).subscribe(
      (result) => {
        if (result) {
          this.todoList.unshift(result);
          this.isAddDialogOpen = false;
        }
      }
    )
  }

  onEditTodo(title: string): void {
    if (!title) return;

    const body = Object.assign({}, this.selectedTodo, { title });
    this.todoService.edit(body).subscribe(
      (result) => {
        if (result) {
          const index = this.todoList.findIndex((item) => {
            return result.id === item.id;
          });
          if (index !== -1) {
            this.todoList[index] = result;
          }
        }
        this.isEditDialogOpen = false;
      }
    )
  }

  onDeleteTodo(): void {
    if (!this.selectedTodo) return;
    this.todoService.delete(this.selectedTodo.id).subscribe(
      (result) => {
        if (result) {
          const index = this.todoList.findIndex((item) => {
            return this.selectedTodo?.id === item.id;
          });

          if (index !== -1) {
            this.todoList.splice(index, 1);
          }
        }
        this.isRemovingDialogOpen = false;
      }
    );
  }

}
