    import React, {useState} from 'react';


    const Square = ({value, onClick}) => {
      
        return (
          <button 
          className="square" 
          onClick={onClick}>
            {value}
          </button>
        );
      
    }

    const Board = ({squares, onClick}) => {
      const renderSquare = (i) => {
        return (
          <Square 
        value={squares[i]} 
        onClick={() => onClick(i)}
        />
        );
      }
        return (
          <div>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        );
    }

    export const Game = () => {
      const [squares, setSquares] = useState({history:[Array(9).fill(null)]});
      const [isNext, setIsNext] = useState(true);

      const handleClick = (i) => {
        const history = history;
        const current = history[history.length -1];
        const square = current.squares.slice();
        if(calculateWinner(squares) || square[i]) {
          return; 
        }
        square[i] = isNext ? 'X': 'O';
        setSquares({history: history.concat(square)})
        setIsNext(!isNext)
      }
  

      const history = history;
      const current = history[history.length -1];
      const square = current.squares.slice();

      
      
      let status;
      if(winner) {
        status = `Wygrywa ${winner}`
      }else {
        status = `Następny gracz ${isNext ? 'X' : 'O'}`
      }
      


        return (
          <div className="game">
            <div className="game-board">
              <Board
            squares={current.squares}
            onClick={(i) => handleClick(i)}
              
              />
            </div>
            <div className="game-info">
              <div>{status}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        );
      
    }

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }





