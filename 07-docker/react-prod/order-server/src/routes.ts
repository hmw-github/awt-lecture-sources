import express from 'express';
import { deleteOrder, deletePosition, getOrderById, getOrders, getPositions, postOrder, postPosition, putOrder, putPosition } from "./controllers/orderController";

const defineRoutes = (app: express.Express) => {
  app.get('/api/order', getOrders);
  app.get('/api/order/:id', getOrderById);
  app.post('/api/order', postOrder);
  app.put('/api/order', putOrder);
  app.delete('/api/order/:id', deleteOrder);

  app.get('/api/order/:orderId/position', getPositions);
  app.post('/api/order/:orderId/position', postPosition);
  app.put('/api/order/:orderId/position', putPosition);
  app.delete('/api/order/:orderId/position/:positionNo', deletePosition);
};

export { defineRoutes };