import React from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helper";

const Game = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null)); // Array(9).fill(null) creates an array of 9 elements, and the .fill() fills each element with null.
  const [xIsNext, setXIsNext] = React.useState(true); // The xIsNext state is used to keep track of the current player.
  const winner = calculateWinner(board); // The winner variable is used to store the result of the calculateWinner function.
  const handleClick = (index) => {
    const newBoard = [...board]; // The spread operator (...) is used to create a copy of the board array.
    if (winner || newBoard[index]) return; // The function returns early if there is a winner or if the square is already filled.
    newBoard[index] = xIsNext ? "X" : "O"; // The newBoard array is updated with the new value.

    setXIsNext(!xIsNext); // The xIsNext state is updated to the opposite value.
    setBoard(newBoard); // The setBoard function is used to update the board array.
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null)); // The board array is reset to an array of 9 elements, and the .fill() fills each element with null.
    setXIsNext(true); // The xIsNext state is reset to true.
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}

      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
