import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  var board = [
    [{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}], 
    [{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}], 
    [{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}]
  ];
  var player = 'X';
  var computer = 'O';
  let randNum = Math.floor(Math.random() * 2) // random number between 0 and 1
	let playerGoesFirst = randNum === 1 ? true : false;

  return (
    <div className="App">
      <TicTacToe board={board} playerChar={player} comChar={computer} playerGoesFirst={playerGoesFirst} />
    </div>
  );
}

export default App;
