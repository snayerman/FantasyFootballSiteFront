import React from 'react'

import './home.scss';

const Home = (props) => (
   <div id="body-container">
      <div className="header">
         <p>McNasty Fantasy Football League</p>
      </div>

      <div className="home-body">
         {props.children}
      </div>
   </div>
)

export default Home