import { Component, Input, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class AddTodo {
  // Signal is passed as a parameter
  @Input() todos!: WritableSignal<Todo[]>;

  description: string;

  constructor() {
    this.description = '';
  }

  add(): void {
    const newTodo = new Todo(NaN, this.description, 'open');
    // TODO 3.1: add newTodo to the signal "todos".
    //           Use todos.update(...) and return a NEW array containing the old todos plus newTodo.
    //           Question: why does todos().push(newTodo) not work reliably?
    this.description = '';

  }
}
