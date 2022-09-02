import { useState } from "react";

const Score = () => {
    const [goalsHome,setGoalsHome] = useState(0);
    const [goalsAway, setGoalsAway] = useState(0);

 const homeScore = (event) =>{
    setGoalsHome(goalsHome + 1);
 }

 const awayScore = (event) => {
    setGoalsAway(goalsAway + 1);
 }
 return (
    <div>
        <h1> {goalsHome} - {goalsAway}</h1>
        <button onClick = {homeScore}>GoalHome</button>
        <button onClick = {awayScore}>GoalAway</button>
    </div>
 )
}

export default Score;