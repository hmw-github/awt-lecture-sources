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

const putOrder = (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(`> putOrder/${JSON.stringify(body)}`);
    
    const ok = updateOrder(body);
    if (ok) {
      res.status(200).send();
    } else {
      res.status(404).send();
    }
    console.log('< putOrder');
  } catch (err) {
    console.log('< putOrder: error: ' + err);
  }
};

const deleteOrder = (req: Request, res: Response) => {
  try {
    const id = req.params.id; // string
    console.log(`> deleteOrder/${JSON.stringify(id)}`);
    
    const ok = removeOrderById(Number(id));
    if (ok) {
      res.status(200).send();
    } else {
      res.status(404).send();
    }
    console.log('< deleteOrder');
  } catch (err) {
    console.log('< deleteOrder: error: ' + err);
  }
};

const getPositions = (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  console.log(`> getPositions/${orderId}`);

  const order = findOrderById(orderId);

  if (order) {
    res.status(200).send(order.positions);
  } else {
    res.status(404).send();
  }

  console.log('< getPositions');
};

const postPosition = (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  const body = req.body;
  console.log(`> postPosition/${orderId} body=${JSON.stringify(body)}`);
  const ok = createPosition(orderId, body);

  if (ok) {
    res.status(201).send();
  } else {
    res.status(404).send();
  }

  console.log('< postPosition');
};

export {
  getOrders,
  getOrderById,
  postOrder,
  putOrder,
  deleteOrder,
  getPositions,
  postPosition,
};