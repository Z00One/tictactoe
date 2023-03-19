import React, { useState } from 'react';
import Square from './Square';
import "./Board.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9), null); // square hook
  const [turn, setTurn] = useState(true); // turn hook
  const turnState = turn ? 'X' : 'O'; // set turn state

  const handleClick = (i) => {
    if (winner || squares[i]) { return; }  // 게임 끝 or 이미 값이 있는 경우 동작 안함
    const newSquares = squares.slice();
    newSquares[i] = turnState;  // 차례에 맞게 값 넣어주기
    setSquares(newSquares);
    setTurn(prev => !prev); // 차례 바꿔주기
  };

  // Squre rendering
  const rederSqaure = (i) => {
    return <Square onClick={() => handleClick(i)}
      value={squares[i]} />  // send handleClick method
  };

  // 승자 확인
  const calculateWinner = (squares) => {
    const checkLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // -> ㅡ
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // -> |
      [0, 4, 8], // -> \
      [2, 4, 6]  // -> /
    ];

    // 체크
    for (const checkLine of checkLines) {
      console.log(checkLine);
      const [indexA, indexB, indexC] = checkLine;
      // 설정된 라인에 같은 값으로만 구성되어 있는지 확인
      if (squares[indexA]
        && squares[indexA] === squares[indexB]
        && squares[indexB] === squares[indexC]
        && squares[indexC] === squares[indexA])
        return squares[indexA]
    }

    return null;
  }

  const winner = calculateWinner(squares);
  const status = winner ? 'Winner : ' + winner : '차례 : ' + turnState;

  // // 게임 종료 메시지 출력
  // const gameOverMessage = (winner) => {
  //   if (winner) {
  //     return(
  //     window.alert(winner + "의 승리입니다.")
  //     );
  //   }
  //   else return;
  // }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {rederSqaure(0)}
        {rederSqaure(1)}
        {rederSqaure(2)}
      </div>
      <div className="board-row">
        {rederSqaure(3)}
        {rederSqaure(4)}
        {rederSqaure(5)}
      </div>
      <div className="board-row">
        {rederSqaure(6)}
        {rederSqaure(7)}
        {rederSqaure(8)}
      </div>
    </div>
  )
}

export default Board;