import React from 'react';

const Board = ({ squares, onClick }) => {
  return (
    <div className="game-board">
      {squares.map((square, index) => (
        <button
          key={index}
          className={`square ${square?.toLowerCase() || ''}`}
          onClick={() => onClick(index)}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
