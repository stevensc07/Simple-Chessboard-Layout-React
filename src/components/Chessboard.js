import React from 'react';
import Square from './Square';
import '../styles/Chessboard.css';

const Chessboard = () => {
  const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const renderSquares = () => {
    const squares = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const squareColor = (row + col) % 2 === 0 ? 'white' : 'black';
        squares.push(
          <Square key={`${row}-${col}`} color={squareColor} />
        );
      }
    }

    return squares;
  };

  return (
    <div className="chessboard">
      <div className="labels-column">
        {rows.map((row, index) => (
          <div key={row} className="label">
            {rows[7 - index]} {/* Corregimos el orden para que coincida con los cuadros */}
          </div>
        ))}
      </div>
      <div className="chessboard-container">
        <div className="labels-row">
          {columns.map((col) => (
            <div key={col} className="label">
              {col}
            </div>
          ))}
        </div>
        <div className="chessboard-grid">{renderSquares()}</div>
      </div>
    </div>
  );
};

export default Chessboard;

