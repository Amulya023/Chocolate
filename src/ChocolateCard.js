import React from 'react';

const ChocolateCard = ({ chocolate, addToOrders }) => {
  return (
    <div className="chocolate-card">
      <h3>{chocolate.name}</h3>
      <p>Price: {chocolate.price}</p>
      <button onClick={() => addToOrders(chocolate)}>Buy Now</button>
    </div>
  );
};

export default ChocolateCard;