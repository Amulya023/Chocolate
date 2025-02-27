import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8', 
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', 
    marginTop: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.2em',
  };

  return (
    <header style={headerStyle}>
      <h1>Chocolate Store 🍫</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/orders" style={linkStyle}>Orders</Link>
      </nav>
    </header>
  );
};

export default Header;