import { Component, Input, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Position } from '../../models/Position';
import { Server } from '../../services/server';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-order-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './order-form.html',
  styleUrl: './order-form.css'
})
export class OrderForm {
  @Input() orders!: WritableSignal<Order[]>;

  customer: string = '';
  positions: Array<Position> = [ {
      nr: 1,
      article: "",
      amount: 1,
      price: 0
    }
  ];

  constructor(private server: Server) {
  }

  public addPosition() {
    this.positions.push({
      nr: this.positions.length + 1,
      article: "",
      amount: 1,
      price: 0
    });
  }

  private makePosition(p: any): Position {
    return {
      nr: p.nr,
      article: p.article,
      amount: parseInt(p.amount),
      price: parseFloat(p.price)
    };
  }

  public createOrder(): void {
    let correctPositions = this.positions
      .filter(p => this.validPosition(p));

    if (this.customer !== '' && correctPositions.length > 0) {
      correctPositions = correctPositions.map(p => this.makePosition(p));

      const newOrder = {
        id: String(Date.now()),
        customer: this.customer,
        date: String(Date.now()),
        positions: correctPositions
      };

      this.server.createOrder(newOrder)
      .subscribe(order => {
        this.orders.update(arr => [...arr, order]);
        this.customer = '';
        this.positions = [{ nr: 1, article: '', amount: 1, price: 0.0 }];
      });
    } else {
      alert('Invalid order data!');
    }
  }

  private validPosition(p: any): boolean {
    return p.nr > 0
      && p.article !== ''
      && !isNaN(parseInt(p.amount))
      && !isNaN(parseFloat(p.price))
      && p.amount > 0
      && p.price > 0.0;
  }
}