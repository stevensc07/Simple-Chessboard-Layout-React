import React from 'react';
import '../styles/Square.css';

const Square = ({ color }) => {
  return <div className={`square ${color}`} />;
};

export default Square;
