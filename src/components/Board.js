import React, { Component } from 'react'
import Square from './Square';
import "./Board.css"

export default class Board extends Component {
  // state - 자식 클래스에게 값을 전달해준다
  constructor(props) {
    super(props); // 부모 클래스의 생성자를 호출해야 본 클래스의 프로퍼티를 설정할 수 있다.
    this.state = {
      squares: Array(9).fill(null),
      turn: 0
    }
  }

  setTurn() {
    
  }

  // click event
  handleClick(i) {
    const turn = this.state.turn;
    const squares = this.state.squares.slice();
    
    squares[i] = (turn % 2 == 0) ? 'O' : 'X'
    
    this.setState({ squares: squares })
    this.setState({ turn: turn + 1 })
    console.log (turn)
  }
  
  rederSqure(i) {
    return <Square onClick={() => this.handleClick(i)}
    value={this.state.squares[i]} />  // send handleClick method
  }

  render() {

    const status = 'Next player: X, O';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.rederSqure(0)}
          {this.rederSqure(1)}
          {this.rederSqure(2)}
        </div>
        <div className="board-row">
          {this.rederSqure(3)}
          {this.rederSqure(4)}
          {this.rederSqure(5)}
        </div>
        <div className="board-row">
          {this.rederSqure(6)}
          {this.rederSqure(7)}
          {this.rederSqure(8)}
        </div>
      </div>
    )
  }
}
