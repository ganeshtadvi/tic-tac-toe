import "./GameBoard.css";
import { useState } from "react";

import Square from "./Square";

const GameBoard = () => {
  const [isInputX, setInputX] = useState(false);
  const [boxValue, setBoxValue] = useState("O");

  const handleSquareClick = () => {
    if (isInputX) {
      setBoxValue("X");
      setInputX(false);
    } else {
      setBoxValue("O");
      setInputX(true);
    }
  };

  return (
    <div className="game-board">
      {Array.from({ length: 9 }, (_, index) => (
        <Square
          key={index}
          onClick={handleSquareClick}
          boxValue={boxValue}
          //  setInputX={setInputX}
        />
      ))}
    </div>
  );
};

export default GameBoard;
