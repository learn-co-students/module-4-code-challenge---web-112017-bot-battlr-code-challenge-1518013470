import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {

  state = {
    showAllBots: true,
    botForDetail: []
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
