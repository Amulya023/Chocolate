import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromOrders, updateQuantity } from './ordersSlice';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromOrders(id));
  };

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, delta: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, delta: -1 }));
  };

  const handleContinueToPayment = () => {
    navigate('/payment');
  };
  const totalItems = orders.reduce((total, order) => total + order.quantity, 0);
  const totalCost = orders.reduce((total, order) => 
    total + parseFloat(order.price.replace(/Rs\./, '').trim()) * order.quantity, 
  0).toFixed(2);
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px', 
      height: '100vh',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      <div style={{ padding: '20px' }}>
        <h2>Your Orders</h2>
        <p style={{ fontSize: '20px', fontWeight: 'normal' }}>List of Items</p>
      </div>
      <div style={{ 
        flex: '1', 
        maxHeight: 'calc(100vh - 200px)', 
        overflowY: 'auto',
        padding: '0 20px',
      }}>
        {orders.length === 0 ? (
          <p>No orders yet! Start shopping now.</p>
        ) : (
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0,  
            width: '100%', 
          }}>
            {orders.map((order) => (
              <li key={order.id} style={{ 
                marginBottom: '20px',
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '10px', 
                borderBottom: '1px solid #ccc',
              }}>
                <div style={{ flexGrow: 1 }}>
                  <strong>{order.name}</strong> - Rs.{(parseFloat(order.price.replace(/Rs\./, '').trim()) * order.quantity).toFixed(2)}
                </div>
                <div style={{ marginLeft: '5px' }}>
                  <button onClick={() => handleIncrease(order.id)} style={{ margin: '0 2px' }}>+</button>
                  <button onClick={() => handleDecrease(order.id)} style={{ margin: '0 2px' }}>-</button>
                  <button onClick={() => handleRemove(order.id)} style={{ margin: '0 5px' }}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div style={{ padding: '20px' }}>
        <strong>Total Items: {totalItems}</strong>
        <strong  style={{ marginLeft: '20px' }}>Total Cost: Rs.{totalCost}</strong>
      </div>
      <button 
        onClick={handleContinueToPayment} 
        style={{ 
          padding: '40px 30px',
          backgroundColor: '#ffcc00',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: 'auto',
          fontSize: '16px',
        }}
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default Orders;