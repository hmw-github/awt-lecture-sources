import { Request, Response } from 'express';
import { createOrder, createPosition, findOrderById, findOrders, removeOrderById, removePosition, updateOrder, updatePosition } from '../database/data';
import { Order } from '../models/Order';

const getOrders = (req: Request, res: Response) => {
  console.log('> getOrders');
  
  const orders = findOrders();
  const result: Order[] = [];
  orders.map(order => result.push(Order.copyFrom(order)));
  res.send(result);

  console.log('< getOrders');
};

const getOrderById = (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(`> getOrderById/${id}`);
  
  if (!id) {
    res.status(404).send();
  } else {
    const orderId = Number(id);
    const order = findOrderById(orderId);

    if (order) {
      res.status(200).send(Order.copyFrom(order));
    } else {
      res.status(404).send();
    }
  }

  console.log('< getOrderById');
};

const postOrder = (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(`> postOrder/${JSON.stringify(body)}`);
    
    const orderWithId = createOrder(body);
    res.status(201).send(orderWithId);
    console.log('< postOrder');
  } catch (err) {
    console.log('< postOrder: error: ' + err);
  }
};



export {
  getOrders,
  getOrderById,
  postOrder 
};