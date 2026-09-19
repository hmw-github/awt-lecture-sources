import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { OrderForm } from './components/order-form/order-form';
import { OrderList } from './components/order-list/order-list';
import { Order } from './models/Order';
import { Server } from './services/server';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OrderForm, OrderList],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'order-client';
  public orders = signal<Order[]>([]);

  constructor(private server: Server) {
  }

  ngOnInit() {
    this.server.getOrders()
    .subscribe(orderList =>{
      if (orderList)
        this.orders.update(arr => orderList);
      else {
        alert('Error loading orders from server!');
      }
    });
  }
}