import { Request, Response } from 'express';
import { createOrder, createPosition, findOrderById, findOrders, removeOrderById, removePosition, updateOrder, updatePosition } from '../database/data';
import { Order } from '../models/Order';

const getOrders = (req: Request, res: Response) => {
  console.log('> getOrders');
  
  const orders = findOrders();
  const result: Order[] = [];

  // TODO: fill result with orders without the position data
  orders.map(order => result.push(Order.copyFrom(order)));
  res.send(result);

  console.log('< getOrders');
};

const getOrderById = (req: Request, res: Response) => {
  const id = req.params.id; // read 'id' path parameter
  console.log(`> getOrderById/${id}`);
  
  if (!id) {
    res.status(404).send();
  } else {
    // TODO: convert id string to number and search order
    const orderId = Number(id);
    const order = findOrderById(orderId);

    if (order) {
      // TODO: send back order without positions 
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
    res.status(400).send();
    console.log('< postOrder: error: ' + err);
  }
};

// TODO: define missing operations putOrder, deleteOrder, getPositions, postPosition
const putOrder = (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;

  // check inputs
  if (!id || !body || id != body.id) {
    res.status(400).send();
  }

  // update the order
  const orderUpdated = updateOrder(body);
  res.status(orderUpdated ? 200 : 404).send();
}
const deleteOrder = (req: Request, res: Response) => {
  // TODO
}
const getPositions = (req: Request, res: Response) => {
  // TODO
}
const postPosition = (req: Request, res: Response) => {
  const id = req.params.id;
  const position = req.body;

  // check inputs
  if (!id || !position || !position.nr 
    || !Number.isNaN(position.nr) 
    || position.article.trim().length() == 0
    || !Number.isNaN(position.amount)) {
    res.status(400).send();
  }
  
  const positionCreated = createPosition(Number(id), position);
  res.status(positionCreated ? 201 : 400).send();
}

export {
  getOrders,
  getOrderById,
  postOrder,
  putOrder,
  deleteOrder,
  getPositions,
  postPosition,
};