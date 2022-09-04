
import './App.scss';
import Score from './components/score/Score';
import {Board} from "./board";
import Match from './components/match/Match';


const {Teams, Matches} = Board;

function App() {
  return (
    <div className="App">
      
      <Score/>
      <Match match={Matches}/>
    </div>
    
  );
}

export default App;
