import { Component } from "@angular/core";
import { Todo } from "../../models/Todo";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [FormsModule],
  selector: 'app-todolist',
  styleUrl: './todolist.component.css',
  templateUrl: './todolist.component.html',
  standalone: true
})
export class Todolist {
  newTodo: string = '';
  todos: Todo[] = [
    new Todo('go shopping', false),
    new Todo('learn React', false)
  ];

  addTodo(): void {
    // create new todo
    const newTodo = new Todo(this.newTodo, false);
    // add new todo to todos
    this.todos.push(newTodo);
    this.newTodo = '';
  }

  setDone(todo: Todo): void {
    todo.done = true;
  }

  todosForState(done: boolean): Todo[] {
    return this.todos.filter(todo => todo.done == done);
  }

}