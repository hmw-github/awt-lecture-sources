import { Component, computed, Input, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
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
    // update signal by adding the new todo object => will cause rendering of the todo list
    this.todos.update(todos => [...todos, newTodo]);
    this.description = '';
  }
}
