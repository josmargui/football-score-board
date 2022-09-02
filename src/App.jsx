
import './App.scss';
import Score from './components/Score.jsx';
import {Board} from "./board";
import Match from './components/Match';


const {Teams, Matches} = Board;

function App() {
  return (
    <div className="App">
      <p>this app work</p>
      <Score/>
      <Match match={Matches}/>
    </div>
    
  );
}

export default App;
