import { Component, computed, effect, Input, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
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

  // TODO 2.1: turn openTodos into a computed signal that contains only the todos
  //           of the signal "todos" whose status is 'open'.
  //           Hint: read the current value of a signal by calling it: this.todos()
  //           Question: why don't you have to update openTodos yourself when "todos" changes?
  openTodos = computed(() => [] as Todo[]);

  constructor() {
    // TODO 5.1: register an effect that logs the current todos to the browser console
    //           every time the signal "todos" changes.
    //           Question: how does Angular know which signals the effect depends on?
  }

  close(todo: Todo) {
    // TODO 4.1: set the status of "todo" to 'closed' by updating the signal "todos".
    //           Use todos.update(...) and return a NEW array (e.g. with map),
    //           in which the todo with the same id is replaced by a new Todo object
    //           with status 'closed'. All other todos stay unchanged.
    //           Question: what happens if you only change todo.status without updating the signal?
    this.todos.update(todos => []);
  }
}
