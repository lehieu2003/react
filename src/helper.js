export function calculateWinner(squares) {
  // The lines array contains all the possible winning combinations.
  // The first three elements of the array are the winning combinations for the first row.
  // The next three elements are the winning combinations for the second row, and so on.
  // The last two elements are the winning combinations for the two diagonals.
  const lines = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
  // The for loop iterates through all the winning combinations.
  // For each winning combination, the three squares are checked to see if they all have the same value.
  // If they do, then the winner is the value of the first square in the winning combination.
  // If the three squares are all empty, then there is no winner.
  // The for loop returns null if there is no winner.
  // If there is a winner, then the for loop returns the value of the first square in the winning combination.
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // The if statement checks if the value of the first square is not null.
    // If it is not null, then the if statement checks if the value of the first square is equal to the value of the second square.
    // If it is equal, then the if statement checks if the value of the first square is equal to the value of the third square.
    // If it is equal, then the if statement returns the value of the first square.
    // If it is not equal, then the for loop continues to the next winning combination.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    // The if statement checks if the value of the first square is null.
    // If it is null, then the for loop continues to the next winning combination.
    // If it is not null, then the for loop continues to the next winning combination.
  }
  return null;
}
