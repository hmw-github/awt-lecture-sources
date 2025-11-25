import { Component, Input } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
  standalone: true
})
export class TodoList {
  @Input() todolist!: Todo[];

  constructor() {
  }

  close(todo: Todo) {
    todo.status = 'closed';
  }
}
