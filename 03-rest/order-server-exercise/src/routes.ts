import express from "express";
import {
  getOrderById,
  getOrders,
  postOrder,
} from "./controllers/orderController";

const defineRoutes = (app: express.Express) => {
  app.get("/api/order", getOrders);
  app.get("/api/order/:id", getOrderById);
  app.post("/api/order", postOrder);
  
};

export { defineRoutes };