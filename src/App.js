import './App.css'
import Board from './components/Board';

function App() {
  
  const turnValue = ['O', 'X'];
  function turn(i) {
    return (turnValue[i])
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board turn={turn}/>
      </div>
      <div className="game-info">
        game-info
      </div>
    </div>
  )
};

export default App;