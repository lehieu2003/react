import React from "react";
import Cell from "./Cell";
const Board = (props) => {
  // The Array(9) creates an array of 9 elements, and the .fill() fills each element with undefined.
  // The .map() method then maps each element to a Cell component.
  // The key prop is necessary for React to keep track of each Cell component.

  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
