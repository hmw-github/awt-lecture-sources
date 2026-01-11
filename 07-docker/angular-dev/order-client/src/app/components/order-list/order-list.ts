import { Component, Input, WritableSignal } from '@angular/core';
import { Order } from '../../models/Order';
import { Server } from '../../services/server';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-order-list',
  imports: [MatIcon],
  standalone: true,
  templateUrl: './order-list.html',
  styleUrl: './order-list.css'
})
export class OrderList {
  @Input() orders!: WritableSignal<Order[]>;

  constructor(private server: Server) {
  }

  public formatCurrency(val: number): string {
    return val.toLocaleString('en', {
      style: 'currency',
      currency: 'EUR'
    });
  }
  public total(order: Order): string {
    return this.formatCurrency(order.positions.reduce((sum, p) => sum + p.amount*p.price, 0));
  }

  public formatOrderDate(order: Order): string {
    return new Date(Number(order.date)).toLocaleString();
  }

  public deleteOrder(order: Order): void {
    this.server.deleteOrder(order.id)
    .subscribe(_ => {
      this.orders.update(arr => this.orders().filter(o => o.id !== order.id));
    });
  }
}