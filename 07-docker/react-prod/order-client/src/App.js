import React, { useState, useEffect } from 'react'
import OrderForm from './components/OrderForm'
import OrderList from './components/OrderList'
import { createOrder, getOrders, deleteOrder } from './api/server'
import './App.css'

function App() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const ordersFromServer = await getOrders();
    setOrders(ordersFromServer);
  }

  const addOrder = async (order) => {
    const newOrder = await createOrder(order);
    setOrders(prev => [...prev, newOrder])
  }

  const removeOrder = async (order) => {
    const success = await deleteOrder(order.id);    
    if (success)
      setOrders(prev => prev.filter(o => o !== order))
    else 
      alert('Could not delete order!');
  }

  return (
    <div className="app-container">
      <h1>Order Management</h1>
      <OrderForm onAddOrder={addOrder} />
      <OrderList orders={orders} deleteOrder={removeOrder} />
    </div>
  )
}

export default App