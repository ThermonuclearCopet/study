import React from 'react';
import './View_Button.css';

const ViewButton = ({ children, onClick, type = 'button' }) => {
  return (
    <button className="view-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default ViewButton;
