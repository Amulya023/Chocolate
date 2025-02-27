import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './chocolateSlice'; 

function ChocolateCounter() {
  const count = useSelector((state) => state.chocolate.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Chocolate Count: {count}</p>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
}

export default ChocolateCounter;
