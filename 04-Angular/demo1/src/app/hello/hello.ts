import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class Hello {
  name: string = 'Anna';

  changeName(): void {
    this.name += '::' + this.name;
  }
}
