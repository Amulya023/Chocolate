
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromOrders, updateQuantity } from './ordersSlice';

const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  console.log('Current orders:', orders);


  const handleRemove = (id) => {
    dispatch(removeFromOrders(id));
  };

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, delta: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, delta: -1 }));
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
       padding: '20px', backgroundColor: '#f8f8f8' }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet! Start shopping now.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              {order.name} - {order.price} x {order.quantity}
              <button onClick={() => handleIncrease(order.id)}>+</button>
              <button onClick={() => handleDecrease(order.id)}>-</button>
              <button onClick={() => handleRemove(order.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
