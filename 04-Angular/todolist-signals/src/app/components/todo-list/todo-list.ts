import { Component, computed, effect, Input, OnInit, WritableSignal } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
  standalone: true
})
export class TodoList {
  // Signal is passed as a parameter
  @Input() todos!: WritableSignal<Todo[]>;

  // computed signal:
  // whenever we change signal "todos", "openTodos" will lead to this
  // component being rerendered
  openTodos = computed(() =>
    this.todos().filter(todo => todo.status == 'open')
  );

  constructor() {
    effect(() => {
      // demonstrates the use of effect... (not needed here)
      console.log('Todos changed:', this.todos());
    });
  }

  close(todo: Todo) {
    // the signal will call the arrow function we provide
    // here, we receive the old todos array and create a new one with one new todo
    // containing a changed status (other attributes are unchanged)
    this.todos.update(todos =>
      todos.map(t =>
        t.id === todo.id ? new Todo(todo.id, todo.description, 'closed') : t
      )
    );
  }
}
