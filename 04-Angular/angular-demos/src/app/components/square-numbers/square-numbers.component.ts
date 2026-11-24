import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { SquareNumber } from '../../models/SquareNumber';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-square-numbers',
    imports: [FormsModule],
    templateUrl: './square-numbers.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./square-numbers.component.css']
})
export class SquareNumbersComponent {
  noSquares!: number;
  firstSquare!: number;
  squares: SquareNumber[];
  sum!: number[];

  // location is of type Location and is injected
  constructor(private location: Location, private router: Router) {
    this.squares = [];
  }
  show(): void {
    this.squares = [];

    // only generate squares if inputs are valid
    if (this.firstSquare > 0 && this.noSquares > 0) {
      // create sqares and fill the squares array
      for (let i = this.firstSquare; i < this.firstSquare + this.noSquares; ++i) {
        const sq = new SquareNumber(i);
        this.squares.push(sq);
      }
    }
  }
  backToMenu() {
    //this.location.back();
    this.router.navigate(['/menu']);
  }
}