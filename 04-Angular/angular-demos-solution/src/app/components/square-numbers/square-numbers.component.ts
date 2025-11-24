import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SquareNumber } from '../../models/SquareNumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-square-numbers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './square-numbers.component.html',
  styleUrls: ['./square-numbers.component.css'],
})
export class SquareNumbersComponent {
  noSquares!: number;
  firstSquare!: number;
  squares: SquareNumber[];
  sum!: number[];

  constructor(private location: Location) {
    this.squares = [];
  }
  show(): void {
    this.squares = [];
    let total = 0;
    this.sum = [];

    if (this.firstSquare > 0 && this.noSquares > 0) {
      for (
        let i = this.firstSquare;
        i < this.firstSquare + this.noSquares;
        ++i
      ) {
        const sq = new SquareNumber(i);
        this.squares.push(sq);
        total += sq.square;
        this.sum.push(total);
      }
    }
  }
  backToMenu() {
    this.location.back();
  }
}