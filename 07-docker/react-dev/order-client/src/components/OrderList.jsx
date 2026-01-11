import './OrderList.css'
import { Trash2 } from 'lucide-react';

function formatCurrency(val) {
  return val.toLocaleString('en', {
    style: 'currency',
    currency: 'EUR'
  });
}

function OrderList({ orders, deleteOrder }) {
  const total = (order) => {
    return formatCurrency(order.positions.reduce((sum, p) => sum + p.amount*p.price, 0));
  }

  if (orders.length === 0) 
    return <p>No orders yet.</p>;

  return (
    <div className="order-list">
      {orders.map(order => (
        <div key={order.id} className="order-card">
          <h2>Order #{order.id}</h2>
          <button type="button" className="delete-button" onClick={e => deleteOrder(order)}>
            <Trash2 size={24} />
          </button>
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Date:</strong> {new Date(Number(order.date)).toLocaleString()}</p>
          <p><strong>Total:</strong> {total(order)}</p>
          <ul>
            {order.positions.map((p, i) => (
              <li key={i}>
                #{p.number} {p.article}: {p.amount} x {formatCurrency(p.price)} = {formatCurrency(p.amount * p.price)}  
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default OrderList