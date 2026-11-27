import { Component, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from './model/Todo';
import { AddTodo } from './components/add-todo/add-todo';
import { TodoList } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [AddTodo, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class App {
  private todosInit: Todo[] = [
    new Todo(NaN, "go shopping todo", "open"),
    new Todo(NaN, "clean room", "open"),
    new Todo(NaN, "program a cool app", "open"),
  ];

  // TODO 1.1: create a writable signal that holds the initial todos (todosInit).
  //           Currently the signal starts with an empty array.
  //           The signal is passed to <app-add-todo> and <app-todo-list> (see app.html),
  //           so both components share the same state.
  public todos: WritableSignal<Todo[]> = signal<Todo[]>([]);
}
