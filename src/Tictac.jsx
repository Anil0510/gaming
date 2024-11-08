import React, { useState } from 'react';
import Square from './Square';
import './Tictac.css';

function Tictac() {
  const winning = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = winning();

  const handleCheck = (index) => {
    if (state[index] !== null || winner) {
      return;
    }
    const copied = [...state];
    copied[index] = isXTurn ? 'X' : 'O';
    setState(copied);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };
  // let audio=new Audio("")
  // const start=()=>{
  //   audio.play();
  // }

  return (
    <div className="board">
      <h2>Tic-Tac-Toe</h2>
      <button className='playagain' onClick={handleReset}>Play Again</button> <br />
      {winner ? (
        <>
          <h3>{winner} won!</h3> <br />
    
        </>
      ) : (
        <h4>Player {isXTurn ? 'X' : 'O'}, please make your move</h4>
      )}
      <div className="board-row">
        <Square onClick={() => handleCheck(0)} value={state[0]} />
        <Square onClick={() => handleCheck(1)} value={state[1]} />
        <Square onClick={() => handleCheck(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleCheck(3)} value={state[3]} />
        <Square onClick={() => handleCheck(4)} value={state[4]} />
        <Square onClick={() => handleCheck(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleCheck(6)} value={state[6]} />
        <Square onClick={() => handleCheck(7)} value={state[7]} />
        <Square onClick={() => handleCheck(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default Tictac;
