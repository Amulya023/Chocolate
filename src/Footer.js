import React from 'react';

const Footer = () => {
  const footerStyle = {
    display: 'flex',         
    justifyContent: 'center', 
    alignItems: 'center',    
    padding: '10px',
    backgroundColor: '#f1f1f1',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '50px',         
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 Chocolate Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
