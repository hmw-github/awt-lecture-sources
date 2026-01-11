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
    res.status(ok ? 200 : 404).send();
    console.log('< putOrder: ' + ok);
  } catch (err) {
    console.log('< putOrder: error: ' + err);
  }
};

const deleteOrder = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    console.log(`> deleteOrder/${id}`);
    
    const ok = removeOrderById(id);
    res.status(ok ? 200 : 404).send();
    console.log('< deleteOrder: ' + ok);
  } catch (err) {
    console.log('< deleteOrder: error: ' + err);
    res.status(404).send();
  }
};

const getPositions = (req: Request, res: Response) => {
  try {
    const orderId = Number(req.params.orderId);
    const order = findOrderById(orderId);
    console.log(`> getPositions/${orderId}`);

    if (!order) {
      res.status(404).send();
      console.log(`< getPositions/${orderId} --> not found!`);
    } else {
      res.status(200).send(order!.positions);
      console.log(`< getPositions/${orderId} -> ${order!.positions.length} positions`);
    }
  } catch (err) {
    console.log(`< getPositions, error: %{err}`);
    res.status(400).send();
  }
};

const postPosition = (req: Request, res: Response) => {
  try {
    const orderId = Number(req.params.orderId);
    const body = req.body;
    console.log(`> postPosition/${orderId} body: ${JSON.stringify(body)}`);
    const ok = createPosition(orderId, body);

    if (ok) {
      res.status(201).send();
      console.log(`< postPosition/${orderId}`);
    } else {
      res.status(400).send();
      console.log(`< postPosition/${orderId} --> error`);
    }
  } catch (err) {
    console.log(`< postPosition, error: %{err}`);
    res.status(400).send();
  }
};

const putPosition = (req: Request, res: Response) => {
  try {
    const orderId = Number(req.params.orderId);
    const body = req.body;
    console.log(`> putPosition/${orderId} body: ${JSON.stringify(body)}`);
    const ok = updatePosition(orderId, body);

    if (ok) {
      res.status(200).send();
      console.log(`< putPosition/${orderId}`);
    } else {
      res.status(400).send();
      console.log(`< putPosition/${orderId} --> error`);
    }
  } catch (err) {
    console.log(`< putPosition, error: %{err}`);
    res.status(400).send();
  }
};

const deletePosition = (req: Request, res: Response) => {
  try {
    const orderId = Number(req.params.orderId);
    const positionNo = Number(req.params.positionNo);
    console.log(`> deletePosition/${orderId}/${positionNo}`);
    const ok = removePosition(orderId, positionNo);

    if (ok) {
      res.status(200).send();
      console.log(`< deletePosition`);
    } else {
      res.status(400).send();
      console.log(`< deletePosition --> error`);
    }
  } catch (err) {
    console.log(`< putPosition, error: %{err}`);
    res.status(400).send();
  }
};

export { getOrders, getOrderById, postOrder, putOrder, deleteOrder, 
  getPositions, postPosition, putPosition, deletePosition };