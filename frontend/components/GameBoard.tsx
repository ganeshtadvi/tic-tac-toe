import "./GameBoard.css";
import { useState } from "react";

import Square from "./Square";

const GameBoard = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isInputX, setInputX] = useState(true);

  const handleBtnClick = (index: number) => {
    if (board[index] !== "") {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = isInputX ? "X" : "O";

    setBoard(newBoard);

    setInputX(!isInputX);

    console.log(newBoard);
  };

  return (
    <div className="game-board">
      {board.map((value, index) => (
        <Square
          key={index}
          boxValue={value}
          btnIndex={index}
          onClick={handleBtnClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;
