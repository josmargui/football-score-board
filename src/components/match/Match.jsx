import React, { useState } from "react";
import './match.scss';

const Match = ({ match }) => {
  const primerValor = () => {
    match &&
      match.map((match) => {
        return (
          <div>
            <p>
              {match.homeTeam} - {match.awayTeam}: {match.goalsHomeTeam} -{" "}
              {match.goalsAwayTeam}
            </p>
          </div>
        );
      });
  };
  const [sortMatch, setSortMatch] = useState(primerValor);

  /* FUNCTION SORT MACHES */

/*   const sortBoard = (event) => {
    const sortMatches = match.sort((a, b) => {
      if ((a.totalGoals === b.totalGoals) & (a.date > b.date)) {
        return a.date;
      }
      return b.totalGoals - a.totalGoals;
    });
    setSortMatch(sortMatches);
    console.log("juan");
    console.log(sortMatches);
  }; */

  const sortBoard = (event) => {
        
         const sortMatches = match.sort((a, b)=> {
          if(a.totalGoals < b.totalGoals){
            return 1
          }  
          if(a.totalGoals > b.totalGoals){
            return -1
          }
          if(a.date > b.date){
            return -1
          }
          if(a.date > b.date){
            return 1
          }

          return b.totalGoals-a.totalGoals;
        });
        setSortMatch(sortMatches)
        console.log("juan");
        console.log(sortMatches);
    }

  return (
    <div className="board-matches">
      <h2>Matches</h2>
      <div className="container-matches">
      {match &&
        match.map((match) => {
          return (
            
              <div className="container-matches__item">
                <p>
                  {match.homeTeam} - {match.awayTeam}: {match.goalsHomeTeam} - {match.goalsAwayTeam}
                </p>
              </div>
            
          );
        })}
      <button onClick={sortBoard}>Ordenar resultados</button>
    </div>
    </div>
  );
};

export default Match;
