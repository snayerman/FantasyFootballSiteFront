import React, {Component} from 'react';
import { IoMdAmericanFootball, IoIosHome, IoMdTrophy, IoMdStats } from 'react-icons/io';
import { navigate } from "gatsby"

import './nav.scss';

export default class Nav extends Component {
   state = {
      open: false,
      selected: "Home"
   };

   clickButton(button) {
      let buttonsOpen = ["Scores", "History", "Statistics"];
      let buttonsNotOpen = ["Home"];

      if(buttonsOpen.indexOf(button) !== -1 && button !== this.state.selected) {         
         this.setState({ open: true, selected: button });
      } else {
         navigate('/');
         this.setState({ open: false, selected: button });
      }
   }

   renderNavList() {
      let className = this.state.open ? "nav-list open" : "nav-list closed";
      return (
         <div className={className}>
            <div className="nav-list-header">
               <h3>{this.state.selected}</h3>
            </div>
         </div>
      );
   }

   renderNavButtons() {
      let icons = {
         Home: <IoIosHome />,
         Scores: <IoMdAmericanFootball />,
         History: <IoMdTrophy />,
         Statistics: <IoMdStats />
      }

      let that = this;

      return (
         <div className="button-list-container">
            {
               Object.keys(icons).map(function(key, index) {
                  let className = that.state.open && that.state.selected === key ? "nav-button-open" : "nav-button";
                  
                  if(that.state.selected === key)
                     className += ' selected';
                  else
                     className += ' not-selected';
                  
                  return (
                     <div key={index} className={className} onClick={() => that.clickButton(key)}>{icons[key]}</div>
                  )
               })
            }
         </div>
      );
   }

   render() {
      return (
         <div className="nav-container">
            <div className="nav-menu">
               {this.renderNavButtons()}
            </div>

            {this.renderNavList()}
         </div>
      );
   }
}