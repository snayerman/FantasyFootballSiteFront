import React from 'react'
import { navigate, Link } from "gatsby"

import './matchup.scss';

const Matchup = ({info}) => {
   return (
      <Link to='/matchupDetails/' state={{matchup: info}}>
         <div className="matchup-card">
            <div className="matchup-left">
            <div className="team-info">
               <img src={info.homeTeam.logoUrl} className="circle-logo"></img>
               <p>{info.homeTeam.nickName}</p>
               <div className="score">
                  {info.homeTeam.score}
               </div>
            </div>
            </div>
            
            <div className="matchup-right">
               <div className="team-info">
                  <img src={info.awayTeam.logoUrl} className="circle-logo"></img>
                  <p>{info.awayTeam.nickName}</p>
                  <div className="score">
                     {info.awayTeam.score}
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default Matchup
