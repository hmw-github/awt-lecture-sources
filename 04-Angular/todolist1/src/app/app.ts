import { Component, signal, WritableSignal } from '@angular/core';
import { Todo } from './model/Todo';
import { AddTodo } from './components/add-todo/add-todo';
import { TodoList } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [AddTodo, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  private todosInit: Todo[] = [
    new Todo(NaN, "go shopping todo", "open"),
    new Todo(NaN, "clean room", "open"),
    new Todo(NaN, "program a cool app", "open"),
  ];
  // define a Signal containing the initial todos
  public todos = signal<Todo[]>(this.todosInit);
}
