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

      if(buttonsOpen.indexOf(button) !== -1) {         
         this.setState({ open: true, selected: button });
      } else {
         navigate('/');
         this.clickWeek(4, "Home");
      }
   }

   clickWeek(week, button) {
      this.setState({ open: false, selected: button });
      this.props.setWeek(week);
   }

   renderWeeks(season) {
      return (
         <div className="nav-list-items">
            <div className="item" onClick={() => this.clickWeek(1, "Scores")}>Week 1</div>
            <div className="item" onClick={() => this.clickWeek(2, "Scores")}>Week 2</div>
            <div className="item" onClick={() => this.clickWeek(3, "Scores")}>Week 3</div>
            <div className="item" onClick={() => this.clickWeek(4, "Scores")}>Week 4</div>
         </div>
      );
   }

   renderNavList() {
      let className = this.state.open ? "nav-list open" : "nav-list closed";
      let years = [2014, 2015, 2016, 2017, 2018];
      let weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let seasons = {};

      return (
         <div className={className}>
            <div className="nav-list-header">
               <h3>{this.state.selected}</h3>
            </div>
            {this.state.selected === "Scores" ? this.renderWeeks(2018) : null}
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