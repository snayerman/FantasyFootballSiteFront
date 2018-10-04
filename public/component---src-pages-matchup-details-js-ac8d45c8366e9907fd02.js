(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});var n=a(7),r=a.n(n),c=a(0),s=a.n(c),i=a(159),o=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={matchup:null},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({matchup:this.props.location.state.matchup})},a.render=function(){return this.state.matchup?s.a.createElement(i.a,{showMatchups:!1,matchup:this.state.matchup}):s.a.createElement("div",null,"LOADING")},t}(c.Component)},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),c=a(4),s=a.n(c),i=a(141),o=a.n(i);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var l=a(145),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},146:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),i=a(52),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){},153:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){"use strict";a(160),a(76),a(75),a(49),a(143),a(48);var n=a(161),r=a.n(n),c=(a(77),a(147),a(162)),s=a.n(c),i=a(7),o=a.n(i),l=a(0),u=a.n(l),m=a(171),p=a(144),h=(a(149),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1,selected:"Home"},t}o()(t,e);var a=t.prototype;return a.clickButton=function(e){-1!==["Scores","History","Statistics"].indexOf(e)?this.setState({open:!0,selected:e}):(Object(p.navigate)("/"),this.clickWeek(4,"Home"))},a.clickWeek=function(e,t){this.setState({open:!1,selected:t}),this.props.setWeek(e)},a.renderWeeks=function(e){var t=this;return u.a.createElement("div",{className:"nav-list-items"},u.a.createElement("div",{className:"item",onClick:function(){return t.clickWeek(1,"Scores")}},"Week 1"),u.a.createElement("div",{className:"item",onClick:function(){return t.clickWeek(2,"Scores")}},"Week 2"),u.a.createElement("div",{className:"item",onClick:function(){return t.clickWeek(3,"Scores")}},"Week 3"),u.a.createElement("div",{className:"item",onClick:function(){return t.clickWeek(4,"Scores")}},"Week 4"))},a.renderNavList=function(){var e=this.state.open?"nav-list open":"nav-list closed";return u.a.createElement("div",{className:e},u.a.createElement("div",{className:"nav-list-header"},u.a.createElement("h3",null,this.state.selected)),"Scores"===this.state.selected?this.renderWeeks(2018):null)},a.renderNavButtons=function(){var e={Home:u.a.createElement(m.a,null),Scores:u.a.createElement(m.b,null),History:u.a.createElement(m.d,null),Statistics:u.a.createElement(m.c,null)},t=this;return u.a.createElement("div",{className:"button-list-container"},Object.keys(e).map(function(a,n){var r=t.state.open&&t.state.selected===a?"nav-button-open":"nav-button";return t.state.selected===a?r+=" selected":r+=" not-selected",u.a.createElement("div",{key:n,className:r,onClick:function(){return t.clickButton(a)}},e[a])}))},a.render=function(){return u.a.createElement("div",{className:"nav-container"},u.a.createElement("div",{className:"nav-menu"},this.renderNavButtons()),this.renderNavList())},t}(l.Component)),d=(a(146),function(e){var t=e.info;return u.a.createElement(p.Link,{to:"/matchupDetails/",state:{matchup:t}},u.a.createElement("div",{className:"matchup-card"},u.a.createElement("div",{className:"matchup-left"},u.a.createElement("div",{className:"team-info"},u.a.createElement("img",{src:t.homeTeam.logoUrl,className:"circle-logo"}),u.a.createElement("p",null,t.homeTeam.nickName),u.a.createElement("div",{className:"score"},t.homeTeam.score))),u.a.createElement("div",{className:"matchup-right"},u.a.createElement("div",{className:"team-info"},u.a.createElement("img",{src:t.awayTeam.logoUrl,className:"circle-logo"}),u.a.createElement("p",null,t.awayTeam.nickName),u.a.createElement("div",{className:"score"},t.awayTeam.score)))))}),f=(a(163),a(164)),v=a.n(f),y=function(e,t){var a=Object.keys(e.players).map(function(t){return e.players[t]});return u.a.createElement("div",{className:"matchup-detail-score"},u.a.createElement("div",{className:"matchup-detail-score-name "+t},e.nickName),u.a.createElement("div",{className:"matchup-detail-score-players"},a.map(function(e){return u.a.createElement("div",{className:"player"},function(e,t){var a=[e.playerPictureUrl,e.name,e.score];return u.a.createElement("div",{className:"player-"+t},u.a.createElement(v.a,{src:a[0],fallbackImage:"https://www.shareicon.net/data/128x128/2015/11/08/157643_nfl_256x256.png",height:"50px",width:"50px",style:{borderRadius:"50%",border:"1px solid #747B90",overflow:"hidden",backgroundColor:"home"===t?"#ff2a5c":"#4b1b59"}}),u.a.createElement("div",{className:"player-"+t+"-name"},a[1]),u.a.createElement("div",{className:"player-"+t+"-score"},a[2]?a[2]:0))}(e,t))})))},k=function(e){var t=e.matchup;return u.a.createElement("div",{className:"matchup-detail-container"},u.a.createElement("div",{className:"hometeam-container"},y(t.homeTeam,"home")),u.a.createElement("div",{className:"awayteam-container"},y(t.awayTeam,"away")))},E=(a(153),function(e){return u.a.createElement("div",{id:"body-container"},u.a.createElement("div",{className:"header"},u.a.createElement("p",null,"McNasty Fantasy Football League")),u.a.createElement("div",{className:"home-body"},e.children))}),N=a(165),w=a.n(N);a(157);a.d(t,"a",function(){return g});var g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={showMatchups:t.props.showMatchups,matchups:{},teams:{},nflSeason:t.props.nflSeason?t.props.nflSeason:2018,nflWeek:t.props.nflWeek?t.props.nflWeek:4},t}o()(t,e);var a=t.prototype;return a.getMatchup=function(){var e=s()(r.a.mark(function e(t,a){var n,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mcnastyserver.herokuapp.com/matchups",n=this.state.matchups,e.next=4,w()("https://mcnastyserver.herokuapp.com/matchups/"+t+"/"+a+"?seasonId=2018");case 4:return c=e.sent,n[this.state.teams[t].owner.split(" ")[0].toLowerCase()]=c.data,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.getTeams=function(){var e=s()(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mcnastyserver.herokuapp.com/teams?seasonId=2018",e.next=3,w()("https://mcnastyserver.herokuapp.com/teams?seasonId=2018");case 3:return t=e.sent,a={},t.data.map(function(e,t){a[e.teamId]=e}),e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.initialize=function(){var e=this,t=[1,2,4,5,6,7,9,10,11,12,13,14];this.getTeams().then(function(a){e.setState({teams:a}),t.map(function(t){e.getMatchup(t,e.state.nflWeek).then(function(t){e.setState({matchups:t})})})})},a.componentDidMount=function(){this.initialize()},a.setWeek=function(e){this.setState({nflWeek:e,showMatchups:!1}),this.initialize()},a.renderMatchups=function(){var e=this,t=[u.a.createElement("h1",{key:"week"},"Week "+this.state.nflWeek+" Matchups")],a=[],n=[];Object.keys(this.state.matchups).map(function(t,r){var c=e.state.matchups[t];-1===n.indexOf(c.homeTeam.teamId)&&(n.push(c.homeTeam.teamId),a.push(u.a.createElement(d,{key:r,info:c})))});for(var r=0;r<a.length/2;r++){var c=2*r;t.push(u.a.createElement("div",{key:"row"+r,className:"matchup-row"},a.slice(c,c+2)))}return u.a.createElement("div",{className:"matchups"},t)},a.renderMatchupDetails=function(){return u.a.createElement(k,{matchup:this.props.matchup})},a.render=function(){return u.a.createElement("div",{className:"container"},u.a.createElement(h,{setWeek:this.setWeek.bind(this)}),u.a.createElement(E,null,this.props.showMatchups?this.renderMatchups():this.renderMatchupDetails()))},t}(l.Component)}}]);
//# sourceMappingURL=component---src-pages-matchup-details-js-ac8d45c8366e9907fd02.js.map