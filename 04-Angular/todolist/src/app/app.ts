import { Component } from '@angular/core';
import { Todolist } from './components/todolist/todolist.component';

@Component({
  imports: [Todolist],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
