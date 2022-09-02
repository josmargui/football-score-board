import React from 'react'

const Match = ({match}) => {
  return (
    <div>
        <h2>Matches</h2>
    
    {match && match.map((match) => {
        return(
            <div>
                <p>{match.hometeam} - {match.awayteam}</p>
            </div>
        )
    })
}
</div>
  )   
}

export default Match