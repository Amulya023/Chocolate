import React from 'react';

const Payment = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
      boxSizing: 'border-box',
      height: '100vh', 
      padding: '20px',
      textAlign: 'center', 
    }}>
      <div>
        <h2>Payment Page</h2>
        <p>Complete your payment details here.</p>
      </div>
    </div>
  );
};

export default Payment;
