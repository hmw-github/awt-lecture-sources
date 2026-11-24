import { Component, computed, effect, Input, OnInit, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
  changeDetection: ChangeDetectionStrategy.Eager,
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
    // update the todos by
    // iterating over the old todos array and create a new todo array
    // where "todo" has a changed status (other attributes are unchanged)
    this.todos.update(todos =>
      todos.map(t => {
        if (t.id === todo.id) {
          t.status = 'closed';
        }
        return t;
      }
      )
    );
  }
}
