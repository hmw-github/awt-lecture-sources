import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Server {
  private readonly BASE_URL: string = '/api/order';

  constructor(private httpClient: HttpClient) {
  }

  public getOrders(): Observable<Array<Order> | null> {
    return new Observable<Array<Order> | null>((subscriber) => {
      this.httpClient.get(this.BASE_URL).subscribe({
        next: (data) => {
          const orders = data as Array<Order>;
          subscriber.next(orders);
        },
        error: (error) => {
          subscriber.next(null);
        },
      });
    });
  }

  public createOrder(newOrder: Order): Observable<Order> {
    return new Observable<Order>(subscriber => {
      this.httpClient.post<Order>(this.BASE_URL, newOrder)
      .subscribe(order => {
        subscriber.next(order);
      });
    });
  }

  public deleteOrder(id: string): Observable<void> {
    return new Observable<void>(subscriber => {
      this.httpClient.delete<void>(this.BASE_URL + '/' + id)
      .subscribe(_ => {
        subscriber.next();
      });
    });
  }
}