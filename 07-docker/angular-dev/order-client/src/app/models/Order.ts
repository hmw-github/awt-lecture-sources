import { Position } from "./Position";

export class Order {
  public constructor(public id: string, public customer: string, public date: string, public positions: Array<Position>) {
  }
}