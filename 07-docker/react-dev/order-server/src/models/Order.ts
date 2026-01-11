import { Position } from "./Position";

export class Order {
  noPositions: number = 0;

  constructor(public id: number, public customer: string, public date: string, public positions: Position[] = []) {
    this.noPositions = this.positions.length;
  }

  static copyFrom(order: Order): Order {
    return new Order(order.id, order.customer, order.date, order.positions);
  }
}