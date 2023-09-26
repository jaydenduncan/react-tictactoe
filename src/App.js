import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  var initialBoard = [
    [{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}], 
    [{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}], 
    [{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}]
  ];
  var player = 'X';
  var computer = 'O';

  return (
    <div className="App">
      <TicTacToe board={initialBoard} playerChar={player} comChar={computer} />
    </div>
  );
}

export default App;
