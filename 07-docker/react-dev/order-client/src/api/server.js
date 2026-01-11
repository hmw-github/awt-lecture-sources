const BASE_URL = '/api/order';

const getOrders = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;    
  } catch (error) {
    console.error('Error fetching orders', error);
    return [];
  } 
}

const createOrder = async (newOrder) => {
  try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });
      const orderCreated = await response.json();
      return orderCreated;
    } catch (error) {
      console.error('Error creating order:', error);
      return null;
    }
}

const deleteOrder = async (id) => {
  try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
      });
      const result = await response.status;
      return result;
    } catch (error) {
      console.error('Error deleting order:', error);
      return false;
    }
}

export { getOrders, createOrder, deleteOrder };