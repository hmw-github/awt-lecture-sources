import express from "express";
import {
  getOrderById,
  getOrders,
  postOrder,
  putOrder,
  deleteOrder,
  getPositions,
  postPosition,
} from "./controllers/orderController";

// register handlers for endpoints
const defineRoutes = (app: express.Express) => {
  app.get("/api/order", getOrders);
  app.get("/api/order/:id", getOrderById);
  app.post("/api/order", postOrder);
  app.put("/api/order/:id", putOrder);
  app.delete("/api/order/:id", deleteOrder);

  // Position routes
  app.get("/api/order/:id/position", getPositions);
  app.post("/api/order/:id/position", postPosition);
};

export { defineRoutes };