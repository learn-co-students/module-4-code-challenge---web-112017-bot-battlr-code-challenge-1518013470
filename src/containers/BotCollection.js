import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';
import Filter from '../components/Filter';

class BotCollection extends React.Component {

  state = {
    showAllBots: true,
    botForDetail: [],
    currentFilter: null
  }

  onCardClick = (bot) =>{
    this.setState ({
      showAllBots: !this.state.showAllBots,
      botForDetail: this.state.botForDetail.concat([bot])[0]
    })
  }

  goBack = () =>{
    this.setState ({
      showAllBots: !this.state.showAllBots,
      botForDetail: []
    })
  }

  handleSelection = (event) => {
    this.setState ({
      currentFilter: event.target.value
    })
  }

  handleSort = () => {
    if (!this.state.currentFilter) {
    this.props.allBots.filter((bot) => {
      return bot.bot_class === this.state.currentFilter
    })
  } else {
    this.props.allBots
  }
}

  render(){
  	return (
      <div>
  
      <div>
       <div style={ this.state.showAllBots? {display: "block"} : {display: "none"}} className="ui four column grid">
        <div className="row">
        {this.props.allBots.map((bot) => {
          return <BotCard key={`${bot.id}allBots`} bot={bot} onCardClick={this.onCardClick}/>
         }
       )}
       </div>
       </div>
       <div style={ this.state.showAllBots? {display: "none"} : {display: "block"}} >
       <BotSpecs
           key={`${this.state.botForDetail.id}specs`}
           bot={this.state.botForDetail} addBotToArmy={this.props.addBotToArmy}
           goBack={this.goBack}
         />
       </div>
  	  </div>
      </div>
  	);
  }

};

export default BotCollection;
//
// {this.props.allBots.map((bot) => {
//   return <BotCard key={bot.id} bot={bot} />
