import React from 'react';

const About= () => {
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'None', 
      };
  return (
    <div  style={headerStyle}>
      <h2>About Store</h2>
      <p>Welcome to Chocolate Store, your one-stop shop for the best chocolates all over the World!</p>
    </div>
  );
};

export default About;
