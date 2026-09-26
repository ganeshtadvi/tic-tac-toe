import "./GameBoard.css";
import { useState } from "react";

import Square from "./Square";

const GameBoard = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isInputX, setInputX] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const checkWinner = (board: string[]) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningPatterns) {
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleBtnClick = (index: number) => {
    if (board[index] !== "") {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = isInputX ? "X" : "O";

    setClickCount(clickCount + 1);

    setBoard(newBoard);

    setInputX(!isInputX);

    console.log(newBoard);

    if (clickCount + 1 >= 5) {
      const result = checkWinner(newBoard);

      if (!result) {
        console.log(null);
      } else {
        console.log(result);
      }
    }
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
