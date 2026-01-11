import { Order } from "../models/Order";
import { Position } from "../models/Position";

// array with order data
let orders: Order[] = [
  new Order(1, 'Rajesh', Date.parse('10 Oct 2024 10:34:00 GMT').toString(), [
    new Position(1, 'IPhone 16', 2, 500.50), new Position(2, 'Macbook Pro', 1, 999.10)
  ])
];

const findOrders = () => {
  return orders;
}

const findOrderById = (id: number) => {
  return orders.find(order => order.id === id);
};

const createOrder = (order: Order): Order => {
  // we trust the caller, DON'T do this in a real project!
  order.id = Date.now();
  orders.push(order);
  return order;
}

const updateOrder = (update: Order): boolean => {
  let found = undefined;

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    if (order.id === update.id) {
      orders[i].customer = update.customer;
      orders[i].date = update.date;
      return true;
    }
  }

  return false;
};

const removeOrderById = (id: number): boolean => {
  let found = undefined;

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    if (order.id === id) {
      orders.splice(i, 1);
      return true;
    }
  }

  return false;
};

const createPosition = (orderId: number, position: Position): boolean => {
  const order = orders.find(order => order.id === orderId);

  if (!order) {
    return false; // order not found
  }
  const p = order.positions.find(p => p.nr === position.nr);
  if (p) {
    return false; // nr must be unique
  }
  order.positions.push(position);
  return true;
};

const updatePosition = (orderId: number, position: Position): boolean => {
  const order = orders.find(order => order.id === orderId);

  if (!order) {
    return false; // order not found
  }
  const p = order.positions.find(p => p.nr === position.nr);
  if (!p) {
    return false; // nr not found
  }
  p.amount = position.amount;
  p.article = position.article;
  p.price = position.price;
  return true;
};

const removePosition = (orderId: number, nr: number): boolean => {
  const order = orders.find(order => order.id === orderId);

  if (!order) {
    return false; // order not found
  }

  let found = false;
  for (let i = 0; i <  order.positions.length; ++i) {
    const pos = order.positions[i];

    if (pos.nr === nr) {
      order.positions.splice(i, 1);
      found = true;
      break;
    }
  }
  return found;
}

export { findOrders, findOrderById, createOrder, updateOrder, removeOrderById, 
  createPosition, updatePosition, removePosition };