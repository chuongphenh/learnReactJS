import React, { useReducer } from "react";
import Board from "./Board";
import { calculateWinner } from "../../helper";
import "./GameStyles.css";

// const Game = () => {
//   // const [board, setBoard] = useState(Array(9).fill(null));
//   // const [xIsNext, setXIsNext] = useState(true);
//   const [state, setState] = useState({
//     board: Array(9).fill(null),
//     xIsNext: true,
//   });
//   const winner = caluculateWinner(state.board);
//   const handleClick = (index) => {
//     const boardCopy = [...state.board]; // copy the board
//     if (winner || boardCopy[index]) return; // if winner is true or boardCopy[index] is true, return
//     boardCopy[index] = state.xIsNext ? "X" : "O"; // if xIsNext is true, put 'X' else put 'O'
//     // setBoard(boardCopy); // set the board with the new boardCopy
//     // setXIsNext(!xIsNext); // set xIsNext to the opposite of xIsNext
//     setState({ board: boardCopy, xIsNext: !state.xIsNext });
//   };
//   const handleRestart = () => {
//     // setBoard(Array(9).fill(null));
//     // setXIsNext(true);
//     setState({ board: Array(9).fill(null), xIsNext: true });
//   };
//   return (
//       <div className="game">
//         <Board cells={state.board} onClick={handleClick}></Board>
//         <div className="game-info">
//           <h1>
//             {winner
//               ? "Winner: " + winner
//               : "Next Player: " + (state.xIsNext ? "X" : "O")}
//           </h1>
//           <button onClick={handleRestart}>Restart Game</button>
//         </div>
//       </div>
//     );
// };

// useReducer
/**
 * const [state, dispatch] = useReducer(reducer, initialState);
 * const action = { type: "ACTION_TYPE", payload: "PAYLOAD" };
 *
 * initialState = {}
 */
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// immutable : không thể chỉnh sửa trực tiếp giá trị của state
// muốn chỉnh sửa thì phải tạo ra 1 bản copy của state
// sử dụng spread operator để tạo ra bản copy của state nhưng có một vấn đề đó chính là nếu state có nhiều phần tử thì việc copy sẽ rất phức tạp và không copy được hết
//=> sử dụng deep copy Json.parse(Json.stringify(obj))
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !state.xIsNext;
      return nextState;
    }
    case "RESTART": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;

      return nextState;
    }
    default:
      break;
  }
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const handleRestart = () => {
    dispatch({
      type: "RESTART",
    });
  };
  return (
    <div className="game">
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-info">
        <h1>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (state.xIsNext ? "X" : "O")}
        </h1>
        <button onClick={handleRestart}>Restart Game</button>
      </div>
    </div>
  );
};

export default Game;
