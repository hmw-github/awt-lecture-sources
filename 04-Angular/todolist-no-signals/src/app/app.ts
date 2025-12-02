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
  public todos: Todo[] = [
    new Todo(NaN, "go shopping todo", "open"),
    new Todo(NaN, "clean room", "open"),
    new Todo(NaN, "program a cool app", "open"),
  ];

  addTodo(newTodo: Todo): void {
    this.todos = [...this.todos, newTodo];
    // not working: why?
    //this.todos.push(newTodo);
  }

  closeTodo(todo: Todo): void {
    //this.todos = this.todos.map(t => t.id == todo.id ? todo : t);
    // or:
    for (let i = 0; i < this.todos.length; ++i) {
      if (this.todos[i].id == todo.id) {
        this.todos[i] = todo;
        break;
      }
    }
  }
}
