import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
  standalone: true
})
export class TodoList implements OnChanges {
  @Input() todos!: Todo[];
  @Output() statusChanged = new EventEmitter<Todo>();

  openTodos: Todo[];

  constructor() {
    this.openTodos = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todos']) {
      this.openTodos = changes['todos'].currentValue.filter((todo: Todo) => todo.status == 'open');
    }
  }

  close(todo: Todo) {
    const changedTodo = new Todo(todo.id, todo.description, 'closed');

    this.todos = this.todos.map(t => t.id === todo.id ? changedTodo : t);
    this.openTodos = this.todos.filter(todo => todo.status == 'open');
    this.statusChanged.emit(changedTodo);
  }
}
