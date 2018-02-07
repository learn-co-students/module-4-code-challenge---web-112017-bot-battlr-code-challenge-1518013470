import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    console.log(this.props.allBots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {this.props.allBots.map((bot) => {
          return <BotCard key={`${bot.id}allBots`} bot={bot} addBotToArmy={this.props.addBotToArmy}/>
         }
       )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
//
// {this.props.allBots.map((bot) => {
//   return <BotCard key={bot.id} bot={bot} />
