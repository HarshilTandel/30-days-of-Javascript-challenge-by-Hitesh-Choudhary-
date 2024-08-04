function solveNQueens(n) {
    let result = [];
    let board = Array.from({ length: n }, () => Array(n).fill("."));
  
    function isSafe(board, row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === "Q") return false;
      }
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === "Q") return false;
      }
      for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === "Q") return false;
      }
      return true;
    }
  
    function placeQueens(board, row) {
      if (row === n) {
        result.push(board.map((r) => r.join("")));
        return;
      }
      for (let col = 0; col < n; col++) {
        if (isSafe(board, row, col)) {
          board[row][col] = "Q";
          placeQueens(board, row + 1);
          board[row][col] = ".";
        }
      }
    }
  
    placeQueens(board, 0);
    return result;
  }
  
  console.log(solveNQueens(4)); // Output all distinct solutions for 4-queens
  console.log(solveNQueens(1)); // [["Q"]]
  