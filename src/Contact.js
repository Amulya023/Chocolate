import React from 'react';

const ContactDetails = () => {
  const contactStyle = {
    position: 'absolute',  
    top: '20px',           
    left: '20px',          
    backgroundColor: '#f4f4f4',  
    padding: '15px',       
    borderRadius: '8px',   
    color: '#333',         
    boxShadow: '0 4px 6px #cf1b1b'  
  };
  return (
    <div className="contact" style={contactStyle}>
      <h3>Contact Us</h3>
      <p>Email: support@chocolatestore.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
  );
};
export default ContactDetails;