import React, {Component} from 'react';
import Nav from '../nav/nav';
import Matchup from '../matchup/matchup';
import MatchupDetails from '../matchup/matchupDetails';
import Home from '../home/home';

import Axios from 'axios';

import './container.css';

export default class Container extends Component {
   state = {
      matchups: {},
      teams: {},
      nflWeek: 4
   };

   async getMatchup(teamId, weekId) {
      let url = "http://localhost:3000/matchups";
      let {matchups} = this.state;

      let match = await Axios(`${url}/${teamId}/${weekId}?seasonId=2018`);
      matchups[this.state.teams[teamId].owner.split(" ")[0].toLowerCase()] = match.data;

      return matchups;
   }

   async getTeams() {
      let url = 'http://localhost:3000/teams?seasonId=2018';
      let res = await Axios(url);
      
      let teams = {};
      res.data.map((team, idx) => {
         teams[team.teamId] = team;  
      });

      return teams;
   }

   componentDidMount() {
      let matchups = {};
      let teamIds = [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];

      this.getTeams().then(teams => {
         this.setState({ teams });

         teamIds.map((id) => {
            this.getMatchup(id, this.state.nflWeek).then(res => {
               this.setState({ matchups: res });
            });
         })
      })
   }

   renderMatchups() {
      let rows = [<h1 key="week">{`Week ${this.state.nflWeek} Matchups`}</h1>];
      let matchups = [];
      let addedMatches = [];

      Object.keys(this.state.matchups).map((player, idx) => {
         let match = this.state.matchups[player];

         if(addedMatches.indexOf(match.homeTeam.teamId) === -1) {
            addedMatches.push(match.homeTeam.teamId);
            matchups.push(<Matchup key={idx} info={match}/>)
         }
      })

      for(let i = 0; i < matchups.length/2; i++) {
         let idx = i*2;
         rows.push(<div key={`row${i}`} className="matchup-row">{matchups.slice(idx, idx+2)}</div>)
      }

      return (
         <div className="matchups">
            {rows}
         </div>
      );
   }

   renderMatchupDetails() {
      return <MatchupDetails matchup={this.props.matchup} />
   }

   render() {
      return (
         <div className="container">
            <Nav></Nav>
            <Home>
               {this.props.showMatchups ? this.renderMatchups() : this.renderMatchupDetails()}
            </Home>
         </div>
      );
   }
}