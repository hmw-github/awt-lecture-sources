import React, { useState } from 'react'
import './OrderForm.css'

function OrderForm({ onAddOrder }) {
  const [customer, setCustomer] = useState('')
  const [positions, setPositions] = useState([{ number: 1, article: '', amount: 1, price: 0.0 }])

  const addPosition = () => {
    setPositions([...positions, { number: positions.length + 1, article: '', amount: 1, price: 0.0 }])
  }

  const updatePosition = (index, field, value) => {
    const updated = [...positions];

    updated[index][field] = value;
    setPositions(updated);
  }

  const validPosition = (p) => {
    return p.number > 0 
      && p.article !== '' 
      && !isNaN(parseInt(p.amount)) 
      && !isNaN(parseFloat(p.price))
      && p.amount > 0
      && p.price > 0.0;
  }

  const makePosition = (p) => {
    return { 
      number: p.number, 
      article: p.article, 
      amount: parseInt(p.amount), 
      price: parseFloat(p.price) 
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let correctPositions = positions
      .filter(p => validPosition(p));
    
    if (correctPositions.length > 0) {
      correctPositions = correctPositions.map(p => makePosition(p));

      const newOrder = {
        id: Date.now(),
        customer,
        date: Date.now(),
        positions: correctPositions
      };
      
      onAddOrder(newOrder);

      setCustomer('');
      setPositions([{ number: 1, article: '', amount: 1, price: 0.0 }]);
    } else {
      alert('Invalid order data!');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <label>
        Customer Name:
        <input
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          required
        />
      </label>

      <div className="positions">
        <p><strong>Positions (name, amount, price):</strong></p>
        {positions.map((pos, index) => (
          <div key={index} className="position-row">
            <input
              type="text"
              placeholder="enter article name"
              value={pos.article}
              onChange={(e) => updatePosition(index, 'article', e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="enter amount"
              value={pos.amount}
              onChange={(e) => updatePosition(index, 'amount', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="enter price"
              value={pos.price}
              onChange={(e) => updatePosition(index, 'price', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addPosition}>+ Add Position</button>
      </div>

      <button type="submit">Add Order</button>
    </form>
  )
}

export default OrderForm