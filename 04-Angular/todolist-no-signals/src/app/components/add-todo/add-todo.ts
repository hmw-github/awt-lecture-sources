import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() todos!: Todo[];
  @Output() todoCreated = new EventEmitter<Todo>();

  description: string;

  constructor() {
    this.description = '';
  }

  add(): void {
    const newTodo = new Todo(NaN, this.description, 'open');
    this.todoCreated.emit(newTodo);
    this.description = '';
  }
}
