import React from 'react';

const Card = ({ title, text, children }) => (
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      {children}
    </div>
  </div>
);

export default Card;
