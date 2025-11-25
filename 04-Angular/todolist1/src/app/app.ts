import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodo } from './add-todo/add-todo';
import { TodoList } from './todo-list/todo-list';
import { Todo } from './model/Todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTodo, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'todolist1';
  todos: Todo[];

  constructor() {
    this.todos = [
      new Todo('go shopping', 'open'),
      new Todo('clean room', 'open'),
      new Todo('test', 'open')
    ];
  }
}
