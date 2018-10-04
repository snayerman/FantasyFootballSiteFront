import React, {Component} from 'react'

import Container from '../components/container/container';

export default class MatchupDetails extends Component {
   state = {
      matchup: null
   };

   componentDidMount() {
      this.setState({ matchup: this.props.location.state.matchup });
   }

   render() {
      if(this.state.matchup)
         return <Container showMatchups={false} matchup={this.state.matchup}></Container>
      else
         return <div>LOADING</div>
   }
}
