import React, { useState, useRef, useEffect } from 'react';
import useChocolateFilter from './useChocolateFilter'; 

const ChocolateList = ({ chocolates, addToOrders }) => {
  const { filter, setFilter, filteredChocolates } = useChocolateFilter(chocolates);

  const [quantities, setQuantities] = useState(
    filteredChocolates.reduce((acc, chocolate) => {
      acc[chocolate.id] = 1;
      return acc;
    }, {})
  );

  const alertRef = useRef(null);

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
    }));
  };

  const handleAddToCart = (chocolate) => {
    addToOrders({ ...chocolate, quantity: quantities[chocolate.id] });

    
    if (!alertRef.current) return;
    alertRef.current.innerText = `${chocolate.name} (Quantity: ${quantities[chocolate.id]}) has been added to the cart!`;
    alertRef.current.style.display = 'block';

    setTimeout(() => {
      if (alertRef.current) {
        alertRef.current.innerText = '';
        alertRef.current.style.display = 'none';
      }
    }, 3000);
  };

  useEffect(() => {
    if (alertRef.current) {
      alertRef.current.style.display = 'none';
    }
  }, []);

  return (
    <div>
      {}
      <input
        type="text"
        placeholder="Search chocolates"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} 
      />
       {}
       <button className="search-button">Search</button>

      {}
      <div className="chocolate-list">
        {filteredChocolates.map((chocolate) => (
          <div key={chocolate.id} className="chocolate-item">
            <img
              src={chocolate.image}
              alt={chocolate.name}
              className="chocolate-image"
            />
            <h3>{chocolate.name}</h3>
            <p>{chocolate.price}</p>

            {}
            <div className="quantity-cart-container">
            <div className="quantity-control">
            <button
            className="quantity-btn"
            onClick={() => decreaseQuantity(chocolate.id)}
          >
            -
          </button>
          <span className="quantity">{quantities[chocolate.id]}</span>
          <button
            className="quantity-btn"
            onClick={() => increaseQuantity(chocolate.id)}
          >
            +
          </button>
        </div>
        <button onClick={() => handleAddToCart(chocolate)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>

    </div>
  ))}
      </div>
      {}
      <div ref={alertRef} className="alert-message"></div>
    </div>
  );
};

export default ChocolateList;
