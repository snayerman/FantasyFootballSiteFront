import React from 'react';
import ReactImageFallback from "react-image-fallback";

import './matchup.scss';

const renderPlayer = (player, side) => {
   let values = [player.playerPictureUrl, player.name, player.score];
   return (
      <div className={`player-${side}`}>
         <ReactImageFallback 
            src = {values[0]}
            fallbackImage = "https://www.shareicon.net/data/128x128/2015/11/08/157643_nfl_256x256.png"
            height = "50px"
            width = "50px"
            style = {{borderRadius: "50%", border: "1px solid #747B90", overflow: "hidden", backgroundColor: side === "home" ? "#ff2a5c" : "#4b1b59"}}
         />

         <div className={`player-${side}-name`}>{values[1]}</div>
         <div className={`player-${side}-score`}>{values[2] ? values[2] : 0}</div>
      </div>
   );
}

const renderTeam = (team, side) => {

   let players = Object.keys(team.players).map(player => {
      return team.players[player];
   });

   return (
      <div className="matchup-detail-score">
         <div className={`matchup-detail-score-name ${side}`}>{team.nickName}</div>
         
         <div className="matchup-detail-score-players">
            {players.map(player => {
               return (
                  <div className="player">
                     {renderPlayer(player, side)}
                  </div>
               );
            })}
         </div>
      </div>
   );
}

const MatchupDetails = ({matchup}) => {
   return (
      <div className="matchup-detail-container">
         <div className="hometeam-container">{renderTeam(matchup.homeTeam, "home")}</div>
         <div className="awayteam-container">{renderTeam(matchup.awayTeam, "away")}</div>
      </div>
   );
}

export default MatchupDetails;